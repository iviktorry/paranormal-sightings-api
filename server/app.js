import http from "node:http";
import { fileURLToPath } from "node:url";
import fs from "node:fs/promises";

const PORT = 7000;
const JSONPath = fileURLToPath(new URL("./data/data.json", import.meta.url));

function setCORSPolicy(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Content-Type", "application/json");
}

function sendResponse(res, statusCode, contentType, payload) {
  res.setStatus = statusCode;
  res.setHeader("Content-Type", contentType);
  res.end(payload);
}

const server = http.createServer(async (req, res) => {
  setCORSPolicy(res);

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.url === "/api") {
    if (req.method === "GET") {
      try {
        const fileData = await fs.readFile(JSONPath, "utf8");

        sendResponse(res, 200, "application/json", fileData);
      } catch (error) {
        console.log(`Error reading data: ${error}`);
        sendResponse(
          res,
          500,
          "application/json",
          JSON.stringify({ error: "Unable to read data" }),
        );
      }
    } else if (req.method === "POST") {
      try {
        let body = "";
        for await (const chunk of req) {
          body += chunk;
        }
        console.log(body);

        const fileData = await fs.readFile(JSONPath, "utf8");
        const fileDataParsed = JSON.parse(fileData);
        const parsedBody = JSON.parse(body);
        fileDataParsed.push(parsedBody);

        await fs.writeFile(
          JSONPath,
          JSON.stringify(fileDataParsed, null, 2),
          "utf8",
        );

        sendResponse(res, 201, "application/json", body);
      } catch (error) {
        console.log(`Error white receiving data: ${error}`);
        sendResponse(
          res,
          400,
          "application/json",
          JSON.stringify({
            error: "Invalid JSON request body",
          }),
        );
      }
    }
  }
});

server.listen(PORT);
