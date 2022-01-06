require("dotenv").config();
const http = require("http");
const server = require("./server");

/** Server */
const httpServer = http.createServer(server);
const PORT = process.env.PORT ?? 6060;
httpServer.listen(PORT, () => console.log(`runinng on port ${PORT}`));
