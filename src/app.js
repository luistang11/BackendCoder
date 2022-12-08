import ProductManager from "./ProductManager.js ";

import express from "express";

const productManager = new ProductManager();

const app = express();
app.use(express.json()); //POST Body
app.use(express.urlencoded({ extended: true })); //Query

const PORT = 8080;

app.get('/', (req, res) => {
    res.send('<p><a href="/products">Lista de Productos</a></p>');
});

app.get("/products", (req, res) => {
    const allProducts =JSON.parse(productManager.getProducts())
    const {limit}=req.query;

    //verifico si el valor del limite es un numero valido
    if(limit===0 || limit===undefined || limit===null || limit==='' || isNaN(limit)){
       res.send(allProducts);  
    }
    else{
        res.send(allProducts.slice(0,limit))
    }
  });

app.get("/products/:id", (req, res) => {

    const {id}=req.params;
    const oneProduct =productManager.getProductById(Number(id))
    console.log(oneProduct);-
    res.send(oneProduct); 
    
});

app.listen(PORT, () => {
    console.log(`🔥 Listening on port ${PORT}`);
});