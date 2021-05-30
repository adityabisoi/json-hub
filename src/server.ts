import http from "http";
const app = require("./app");

// Define port
const port = process.env.PORT || 5000;

const server = http.createServer(app);
server.listen(port);
