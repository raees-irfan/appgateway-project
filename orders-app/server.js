const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/orders") {
    res.end("Orders Service 📦");
  } else if (req.url === "/health") {
    res.end("OK");
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

server.listen(PORT);