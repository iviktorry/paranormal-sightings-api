import http from "node:http";
import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 7000;
const dataPath = path.join(__dirname, "data", "sightings.json");

async function getSightings() {
  try {
    const filedata = await fs.readFile(dataPath, "utf8");
    return JSON.parse(filedata);
  } catch (error) {
    console.error(`Error reading JSON: ${error}`);
    return [];
  }
}
const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Content-Type", "application/json");

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    return res.end();
  }

  if (req.url === "/api") {
    if (req.method === "GET") {
      const sightings = await getSightings();
      res.statusCode = 200;
      return res.end(JSON.stringify(sightings));
    } else {
      //
    }
  }

  res.statusCode = 404;
  res.end(JSON.stringify({ error: "Route not found" }));
});

server.listen(PORT);
