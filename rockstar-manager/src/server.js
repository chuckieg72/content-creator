import http from "node:http";
import { getCreatorProfile } from "./kit.js";

const port = Number(process.env.PORT || 8787);

function sendJson(response, status, payload) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload));
}

const server = http.createServer(async (request, response) => {
  if (request.method === "GET" && request.url === "/health") {
    return sendJson(response, 200, { ok: true, service: "tms-rockstar-manager" });
  }

  if (request.method === "GET" && request.url === "/kit/status") {
    try {
      const result = await getCreatorProfile();
      return sendJson(response, 200, { ok: true, provider: "kit", profile: result.profile ?? null });
    } catch (error) {
      const status = Number.isInteger(error.status) ? error.status : 503;
      return sendJson(response, status, {
        ok: false,
        provider: "kit",
        error: error.message,
        details: error.details ?? null
      });
    }
  }

  return sendJson(response, 404, { ok: false, error: "Not found" });
});

server.listen(port, () => {
  console.log(`TMS Rockstar Manager listening on port ${port}`);
});
