const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST");
    return res.status(200).json({});
  }
  next();
});

/** Routes */
app.post("/fetch-me", (req, res) => {
  // Analyze your request / mutate your response.
  return res.status(499).json({
    headers: req.headers,
    message: "Intentional error to prevent further requests",
  });
});

app.get("/", (req, res) => {
  res.status(200).send({ success: true });
});

/** Error handling */
app.use((req, res, next) => {
  const error = new Error("not found");
  return res.status(404).json({
    message: error.message,
  });
});

module.exports = app;
