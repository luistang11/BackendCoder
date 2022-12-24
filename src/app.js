import express from "express";
import {Server} from "socket.io";
import { engine } from "express-handlebars";

import productsRouter from './routes/products.router.js'
import cartsRouter from './routes/carts.router.js'
import realTimeRouter from './routes/realtime.router.js'
import homeRouter from './routes/home.router.js';

const app = express();
app.use(express.json()); //POST Body
app.use(express.urlencoded({ extended: true })); //Query
app.use('/public',express.static('public'))
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

const PORT = 8080;


app.use('/api/products',productsRouter)
app.use('/api/carts',cartsRouter)

app.use('/realtimeproducts',realTimeRouter)
app.use('/',homeRouter)



const server=app.listen(PORT, () => {
    console.log(`🔥 Listening on port ${PORT}`);
});
server.on('error', (err) =>console.log(err));

const socketServer=new Server(server);

socketServer.on('connection',(socket)=>{
    console.log("nueva conexion")
    socket.emit("Welcome", { welcome: "Bienvenido al nuevo campeón Argentina! 🇦🇷" });
    socket.on("disconnect", () => {
        console.log("Cliente desconectado");
      });
})