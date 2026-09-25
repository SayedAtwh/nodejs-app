const assert = require("node:assert/strict");
const http = require("node:http");
const test = require("node:test");

const app = require("../src/index");

test("GET /health returns a healthy response", async () => {
  const server = app.listen(0);

  try {
    const response = await new Promise((resolve, reject) => {
      const request = http.get(
        `http://127.0.0.1:${server.address().port}/health`,
        (result) => {
          let body = "";

          result.setEncoding("utf8");
          result.on("data", (chunk) => {
            body += chunk;
          });
          result.on("end", () => {
            resolve({
              statusCode: result.statusCode,
              body: JSON.parse(body)
            });
          });
        }
      );

      request.on("error", reject);
    });

    assert.equal(response.statusCode, 200);
    assert.equal(response.body.status, "healthy");
    assert.equal(response.body.service, "CloudPulse");
  } finally {
    await new Promise((resolve, reject) => {
      server.close((error) => (error ? reject(error) : resolve()));
    });
  }
});