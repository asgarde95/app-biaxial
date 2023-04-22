const express = require("express");
const app = express();

// Rutas
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Middleware para Vue.js router modo history
const history = require("connect-history-api-fallback");
app.use(history());
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
