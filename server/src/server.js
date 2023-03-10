import express from 'express';

const app = express();

app.use(express.json());

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.post('/hellop', (req, res) => {
    console.log(req.body)
    res.send(`Hello ${req.body.name}!`);
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});