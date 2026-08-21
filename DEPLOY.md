# Deploying to Plesk (Pixelgate)

## Requirements

- Plesk with the **Git** and **Node.js** extensions installed (ask Pixelgate support to enable them if missing)
- **Node.js 22 LTS** (minimum 20.19) — set in Plesk *Node.js* settings
- ~1.5 GB free RAM for the build step (see note at the bottom if your plan has less)

## Steps

1. **Connect the repo**
   Plesk → *Git* → *Add Repository* → URL: `https://github.com/Mon323/aargu-redesign.git`
   Deploy automatically on push is optional.

2. **Enable Node.js**
   Plesk → *Node.js* → enable with:
   - Application root: the Git deployment folder
   - Application startup file: `app.mjs`
   - Application mode: Production

3. **Install & build** (Plesk → *Node.js* → "Run NPM script"):
   - `npm install`
   - `npm run build`

4. **Restart** the app in the Node.js panel. The site is now served
   (Passenger picks up the port automatically via `PORT` — no config needed).

## What the deploy file does

`app.mjs` is the Plesk entry point. It serves static files from `dist/client`
(CSS, JS, fonts, `logo.png`) with long-cache headers for fingerprinted assets,
and forwards all other requests to the SSR server from `dist/server/server.js`.

## Low-memory hosting plans

If `npm run build` fails or gets killed on the server, build locally instead:

```
npm install
npm run build
```

Then upload the `dist/` folder and `app.mjs` to the Plesk document/app folder
(skip `node_modules` except what the build needs — or run `npm install --omit=dev`
on the server). Restart the app afterwards.
