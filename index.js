const express = require('express');
const app = express();

app.use(express.json());

let filmes = [];
let id = 1;

// GET
app.get('/filmes', (req, res) => {
  res.json(filmes);
});

// POST
app.post('/filmes', (req, res) => {
  const { titulo, ano, genero, nota } = req.body;

  if (!titulo || titulo.length < 2) {
    return res.status(400).json({ erro: 'Título inválido' });
  }

  if (!ano || ano < 1888 || ano > 2026) {
    return res.status(400).json({ erro: 'Ano inválido' });
  }

  if (!genero || genero.trim() === '') {
    return res.status(400).json({ erro: 'Gênero obrigatório' });
  }

  if (nota == null || nota < 0 || nota > 10) {
    return res.status(400).json({ erro: 'Nota inválida' });
  }

  const novoFilme = {
    id: id++,
    titulo,
    ano,
    genero,
    nota
  };

  filmes.push(novoFilme);

  res.status(201).json(novoFilme);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000 🚀');
});
