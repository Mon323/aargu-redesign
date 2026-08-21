import { createServer } from "node:http";
import { createReadStream, statSync } from "node:fs";
import { extname, join, dirname, normalize, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { Readable } from "node:stream";
import ssrServer from "./dist/server/server.js";

const CLIENT_DIR = join(dirname(fileURLToPath(import.meta.url)), "dist", "client");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".json": "application/json",
  ".map": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json",
};

function serveStatic(pathname, res) {
  let filePath;
  let fileStat;
  try {
    filePath = normalize(join(CLIENT_DIR, pathname));
    if (!filePath.startsWith(CLIENT_DIR + sep) && filePath !== CLIENT_DIR) return false;
    fileStat = statSync(filePath);
    if (!fileStat.isFile()) return false;
  } catch {
    return false;
  }
  const ext = extname(filePath).toLowerCase();
  const immutable = filePath.startsWith(CLIENT_DIR + sep + "assets" + sep);
  res.writeHead(200, {
    "content-type": MIME[ext] ?? "application/octet-stream",
    "content-length": fileStat.size,
    "cache-control": immutable
      ? "public, max-age=31536000, immutable"
      : "public, max-age=3600",
  });
  createReadStream(filePath).pipe(res);
  return true;
}

const httpServer = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host ?? "localhost"}`);
    if (serveStatic(url.pathname, res)) return;

    const hasBody = req.method !== "GET" && req.method !== "HEAD";
    const request = new Request(url, {
      method: req.method,
      headers: new Headers(req.headers),
      body: hasBody ? Readable.toWeb(req) : undefined,
      ...(hasBody ? { duplex: "half" } : {}),
    });

    const response = await ssrServer.fetch(request, undefined, undefined);
    res.writeHead(response.status, Object.fromEntries(response.headers));
    if (response.body) {
      Readable.fromWeb(response.body).pipe(res);
    } else {
      res.end();
    }
  } catch (error) {
    console.error(error);
    if (!res.headersSent) {
      res.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
    }
    res.end("Internal Server Error");
  }
});

const port = Number(process.env.PORT) || 3000;
httpServer.listen(port, () => {
  console.log(`Aargu site listening on port ${port}`);
});
