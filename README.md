API de Filmes (JavaScript)



API REST desenvolvida em JavaScript (Node.js + Express) para cadastro e listagem de filmes.





🎀 LISTA DE TODOS OS ENDPOINTS 🎀
GET /filmes
POST /filmes





🎀 DETALHAMENTO DOS ENDPOINTS 🎀

GET /filmes
  Método: GET
  URL: http://localhost:3000/filmes
  Body: Não possui
  Resposta:
  {
    "id": 1,
    "titulo": "Interestelar",
    "ano": 2014,
    "genero": "Ficção Científica",
    "nota": 9
  }


POST /filmes
   Método: POST
   URL: http://localhost:3000/filmes
   Body: 
   {
     "titulo": "Clube da Luta",
     "ano": 1999,
     "genero": "Drama",
     "nota": 10
   }
   Resposta:
   {
     "id": 2,
     "titulo": "Clube da Luta",
     "ano": 1999,
     "genero": "Drama",
     "nota": 10
   }





🎀 EXEMPLOS DE REQUISIÇÃO NO POSTMAN 🎀

✅ POST (CRIANDO FILMES)

1
   {
     "titulo": "Interestelar",
     "ano": 2014,
     "genero": "Ficção Científica",
     "nota": 9
   }

2
   {
     "titulo": "Titanic",
     "ano": 1997,
     "genero": "Romance",
     "nota": 9
   }

3
   {
     "titulo": "Coringa",
     "ano": 2019,
     "genero": "Drama",
     "nota": 8
   }

4
   {
     "titulo": "Vingadores",
     "ano": 2012,
     "genero": "Ação",
     "nota": 8
   }

5
   {
     "titulo": "Clube da Luta",
     "ano": 1999,
     "genero": "Drama",
     "nota": 10
   }

   
❌ POST (ERRO DE VALIDAÇÃO) 

   {
     "titulo": "",
     "ano": 3000,
     "genero": "",
     "nota": 20
   }
   
Resposta:

   {
     "erro": "Título inválido"
   }




   
🎀 CAPTURA DOS TESTES 🎀

![Image](https://github.com/user-attachments/assets/dfe5d0e1-9840-4093-98a5-218254e97c61)




🎀 EXPLICAÇÃO DAS VALIDAÇÕES IMPLEMENTADAS 🎀

A API valida os dados antes de salvar:

   Título:
      Obrigatório
      Mínimo de 2 caracteres
      
   Ano:
      Obrigatório
      Deve estar entre 1888 e 2026
  
   Gênero:
      Obrigatório
      Não pode estar vazio
      
   Nota:
      Obrigatória
      Deve estar entre 0 e 10
      
   Comportamento em erro:
      Retorna status 400 Bad Request
      Retorna mensagem em JSON




      
🎀 IMPLEMENTAÇÃO DA API (JAVASCRIPT) 🎀

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

  // validações
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




🎀 COLLECTION DO POSTMAN 🎀
