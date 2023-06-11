import express from "express";

const app = express();

const port = 5000;

app.listen(port, () => console.log(`API running on port ${port}`));

app.get('/', (req, res) => res.json('My API running!'));
