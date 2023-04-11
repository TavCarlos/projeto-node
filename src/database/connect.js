const mongoose = require('mongoose');

const url = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.jsz5jyp.mongodb.net/?retryWrites=true&w=majority`

const connectToDataBase = async () =>{
    await mongoose.connect(url).then(() => console.log('Banco de dados conectado com sucesso!'))
    .catch((error) => console.log('Ocorreu erro ao tentar ser conectar ao banco de dados', error))
};

module.exports = connectToDataBase
