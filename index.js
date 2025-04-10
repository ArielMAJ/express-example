const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

let items = ['Item 1', 'Item 2', 'Item 3'];

app.get('/api/items', (req, res) => {
    console.log('Requisição recebida na rota /api/items; Método:', req.method);
    res.json(items);
});

// Define uma rota GET na raiz
app.get('/', (req, res) => {
  res.send('Bem-vindo à API construída com Express!');
});


// Define o servidor para ouvir na porta 3000
app.listen(3000, () => {
  console.log('Aplicação executando em http://localhost:3000');
});