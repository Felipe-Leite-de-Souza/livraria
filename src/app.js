import express from "express";

const app = express();

app.use(express.json());

const livros = [
    {id: 1, "titulo": "O Senhor dos Anéis - A Sociedade do Anel"},
    {id: 2, "titulo": "O Senhor dos Anéis - As Duas Torres"},
    {id: 3, "titulo": "O Senhor dos Anéis - O Retorno do Rei"},
];

app.get("/", (req, res) => {
    res.status(200).send("Livraria Nerd");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso.");
});

export default app;