const express = require("express");

const app = express();

app.set("PORT", process.env.PORT || 4000);

app.get("/", (req, res) => {
  res.send("Hello, welcome to the app.");
});

app.get("/api/:slug", (req, res) => {
  const { slug } = req.params;
  res.json({
    data: { text: `/api/${slug} data` },
    success: true,
  });
});

app.listen(app.get("PORT"), () => {
  console.log(`Server is running at port ${app.get("PORT")}`);
});
