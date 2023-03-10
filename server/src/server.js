import express from "express";

let articleInfo = [
  {
    name: "learn-react",
    upvotes: 0,
    comments: [],
  },
  {
    name: "learn-node",
    upvotes: 0,
    comments: [],
  },
];

const app = express();

app.use(express.json());

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

app.post("/api/articles/:name/comments", (req, res) => {
  const { name } = req.params;
  const { username, text } = req.body;
  const article = articleInfo.find((article) => article.name === name);

  article
    ? (article.comments.push({ username, text }),
      res.send(`${name} now has ${article.comments.length} comments`))
    : res.send("No article found");
});

app.put("/api/articles/:name/upvote", (req, res) => {
  const { name } = req.params;
  const article = articleInfo.find((article) => article.name === name);

  article
    ? ((article.upvotes += 1),
      res.send(`${name} now has ${article.upvotes} upvotes`))
    : res.send("No article found");
});

app.get("/api/articles/:name", (req, res) => {
  const { name } = req.params;
  const article = articleInfo.find((article) => article.name === name);

  article ? res.send(article) : res.send("No article found");
});
