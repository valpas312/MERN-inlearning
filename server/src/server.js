//Servidor con sus rutas
import express from "express";
import { connectDb } from "../db/db.js";
import client from "../db/db.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

connectDb();

//test
// app.get('/hello', (req, res) => {
//     res.send('Hello World!');
// });

// app.post('/hellop', (req, res) => {
//     console.log(req.body)
//     res.send(`Hello ${req.body.name}!`);
// });

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

//Rutas
app.get("/api/articles/:name", async (req, res) => {
  const { name } = req.params;

  const db = client.db("test");
  const article = await db.collection("mern").findOne({ name });

  article
    ? res.status(200).json(article)
    : res.status(404).json({ message: "Article not found" });
});

app.post("/api/articles/:name/comments", async (req, res) => {
  const { name } = req.params;
  const { username, text } = req.body;

  const db = client.db("test");
  await db
    .collection("mern")
    .updateOne({ name }, { $push: { comments: { username, text } } });

  const article = await db.collection("mern").findOne({ name });

  article
    ? res.json(article)
    : res.send("No article found");
});

app.put("/api/articles/:name/upvote", async (req, res) => {
  const { name } = req.params;
  const db = client.db("test");
  await db.collection("mern").updateOne({ name }, { $inc: { upvotes: 1 } });

  const article = await db.collection("mern").findOne({ name });

  article
    ? res.status(200).json(article.upvotes)
    : res.status(404).json({ message: "Article not found" });
});

app.get("/api/articles/:name", async (req, res) => {
  const { name } = req.params;
  const db = client.db("test");
  await db.collection("mern").findOne({ name });

  article
    ? res.status(200).json(article)
    : res.status(404).json({ message: "Article not found" });
});

app.get("/api/articles", async (req, res) => {
  const db = client.db("test");
  const articles = await db.collection("mern").find({}).toArray();

  articles
  ? res.status(200).json(articles)
  : res.status(404).json({ message: "Articles not found" });

});