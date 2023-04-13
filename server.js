const http = require("http");
const port = 3000;

const rotas = {
    "/": "Teste server node",
    "/livros": "Página de livros",
    "/autores": "Lista de autores",
    "/editora": "Página de editora",
    "/sobre": "informações sobre a livraria",
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {"COntent-Type": "text/plan"});
    res.end(rotas[req.url]);
});

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
})