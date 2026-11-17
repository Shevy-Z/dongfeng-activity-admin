import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const root = join(process.cwd(), "dist");
const port = Number(process.env.PORT || 4173);
const mime = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".svg": "image/svg+xml", ".png": "image/png" };

createServer(async (req, res) => {
  try {
    const urlPath = decodeURIComponent(new URL(req.url, `http://${req.headers.host}`).pathname);
    let filePath = normalize(join(root, urlPath === "/" ? "index.html" : urlPath));
    if (!filePath.startsWith(root)) throw new Error("Invalid path");
    try { if ((await stat(filePath)).isDirectory()) filePath = join(filePath, "index.html"); } catch { filePath = join(root, "index.html"); }
    const body = await readFile(filePath);
    res.writeHead(200, { "content-type": mime[extname(filePath)] || "application/octet-stream", "cache-control": "no-store" });
    res.end(body);
  } catch {
    res.writeHead(404); res.end("Not found");
  }
}).listen(port, "127.0.0.1", () => console.log(`Local: http://127.0.0.1:${port}`));
