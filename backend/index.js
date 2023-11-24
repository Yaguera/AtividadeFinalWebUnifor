// index.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Conectar ao MongoDB
const connectToDb = () => {
    mongoose.connect(
        "mongodb+srv://root:fhRF2mJiKR1jEpk6@cluster0.bhhtmyt.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    ).then(() => {
        console.log('MongoDB connected')
    }).catch((err) => {
        console.log(err)
    });
};

// Definir um modelo para a coleção no MongoDB
const User = mongoose.model('User', {
    nome: String,
    email: String,
    senha: String,
    atividade: {
        tarefa: {
            type: String,
            require: true,
        },
        check: {
            type: Boolean,
            default: false,
        },
        data: {
            type: Date,
            default: Date.now(),
        },
    }
});

// Rota para obter todas as tarefas
app.get('/backend/index.js', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Iniciar o servidor
const PORT = 3001;
connectToDb();
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
