import productManager from "./ProductManager.js ";
import express from "express";



import productsRouter from './routes/products.router.js'
import cartsRouter from './routes/carts.router.js'


const app = express();
app.use(express.json()); //POST Body
app.use(express.urlencoded({ extended: true })); //Query
app.use('static',express.static('../public'))//en la url tiene que tener static/..
app.use(express.static('../public'))


const PORT = 8080;


app.use('/api/products',productsRouter)
app.use('/api/carts',cartsRouter)

//app.use('/api/users',usersRouter)


app.get('/', (req, res) => {
    res.send('<p><a href="/products">Lista de Productos</a></p>');
});



app.listen(PORT, () => {
    console.log(`🔥 Listening on port ${PORT}`);
});