if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const server = require("./server");

const PORT = process.env.PORT ?? 6060;
server.listen(PORT, function () {
  console.log(`Listening on Port ${PORT}`);
});
