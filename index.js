const express = require("express");
const app = express();
const path = require("path");

const knex = require("knex");
const config = require("./knex");
const db = knex(config);

app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.json());

app.get("/api/ramen", async (_, res) => {
  try {
    const ramen = await db("ramen").select();
    res.status(200).json({ ramen_info: ramen });
  } catch (err) {
    res.status(500).end();
  }
});

app.get("/api/ramen/:category", async (req, res) => {
  const category = req.params.category;
  let ramen;
  try {
    if (category === "1") {
      ramen = await db("ramen")
        .where("category", "=", "家系")
        .select();
    } else if (category === "2") {
      ramen = await db("ramen")
        .where("category", "=", "醤油")
        .select();
    } else if (category === "3") {
      ramen = await db("ramen")
        .where("category", "=", "塩")
        .select();
    } else if (category === "4") {
      ramen = await db("ramen")
        .where("category", "=", "味噌")
        .select();
    } else if (category === "5") {
      ramen = await db("ramen")
        .where("category", "=", "豚骨")
        .select();
    } else if (category === "6") {
      ramen = await db("ramen")
        .where("category", "=", "鶏白湯")
        .select();
    } else if (category === "7") {
      ramen = await db("ramen")
        .where("category", "=", "つけ麺")
        .select();
    } else if (category === "8") {
      ramen = await db("ramen")
        .where("category", "=", "油そば")
        .select();
    } 
    res.status(200).json({ ramen_info: ramen });
  } catch (err) {
    res.status(500).end();
  }
});

app.get("*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

const port = 3000;
app.listen(port, () => {
  console.log("App listening on port" + port);
});