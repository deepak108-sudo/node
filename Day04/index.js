const http = require("http");

const server = http.createServer((req, res) => {
  // res.end("Hello I am deepak Kumar");

  if (req.url === "/") {
    res.end("Hello Coders");
  } else if (req.url === "/contact") {
    res.end("This is contact");
  } else if (req.url === "/about") {
    res.end("This is About");
  } else {
    res.end("Other path");
  }
});

server.listen(4000, () => {
  console.log("I am listening at 4000");
});
