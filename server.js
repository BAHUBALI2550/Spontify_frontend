const { createServer } = require("https");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");
const path = require("path");

// Certificate paths
const key = fs.readFileSync(path.join(__dirname, "certificates/localhost-key.pem"));
const cert = fs.readFileSync(path.join(__dirname, "certificates/localhost.pem"));

const app = next({ dev: true }); // Ensure dev mode
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer({ key, cert }, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(3000, () => {
    console.log("✅ Ready on https://localhost:3000");
  });
});
