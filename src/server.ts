import http from "http";
const app = require("./app");

// Define port
const port =  process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port);
