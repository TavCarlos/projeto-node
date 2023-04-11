const dotenv = require('dotenv');
dotenv.config();

const connectToDataBase = require('./src/database/connect');
connectToDataBase();

const express = require('express');
const app = express();
app.use(express.json());

const productModel = require('./src/models/product')

//rotas
//Adicionando os produtos
app.post('/products', async (req,res) =>{
    try{
        const product = await productModel.create(req.body)
        res.status(201).json(product)
    } catch(error){
        res.status(500).send(error, message)
    }
});

//Procurando Produtos
//Monstrando todos os produtos
app.get('/products', async (req, res) =>{
    try{
        const products = await productModel.find({});
        res.status(200).json(products)

    } catch(error){
        res.status(500).send(error, message)
    }
});

//Procurando o Produto através do ID
app.get('/products/:id', async(req, res) =>{
    try{
        const id = req.params.id
        const product = await productModel.findById(id);
        res.status(200).json(product)
    } catch(error){
        res.status(500).send(error, message)
    }
});

//atualizando informação
app.patch('/products/update/:id', async (req, res) =>{
    try{
        const id = req.params.id
        const product = await productModel.findByIdAndUpdate(id, req.body, {new: true})
        res.status(200).json(product)
    } catch(error){
        res.status(500).send(error, message)
    }
});

app.delete('/products/delete/:id', async (req, res) =>{
    try{
        const id = req.params.id
        const product = await productModel.findByIdAndRemove(id)
        res.status(200).json(product)
    } catch(error){
        res.status(500).send(error, message)
    }
})



const port = 8081
app.listen(8081, () => console.log('servidor rodando na porta 8081'))



