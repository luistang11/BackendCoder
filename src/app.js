import express from "express";
import { Server } from "socket.io";
import { engine } from "express-handlebars";
import dotenv from "dotenv";
import cookie from "cookie-parser";
import session from "express-session";
import mongoStore from "connect-mongo";

import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";
import cartRouter from "./routes/cartView.router.js";
import realTimeRouter from "./routes/realtime.router.js";
import homeRouter from "./routes/home.router.js";
import userRouter from "./routes/users.router.js";
import messagesRouter from "./routes/messages.router.js";
import { postMessage } from "./services/messages.services.js";
import "./config/db.js";

const app = express();
app.use(express.json()); //POST Body
app.use(express.urlencoded({ extended: true })); //Query
app.use("/public", express.static("public"));
app.use(cookie());
app.use(session({
    store: new mongoStore({
      mongoUrl: process.env.MONGO_URI,
      options: {
        userNewUrlParser: true,
        useUnifiedTopology: true,
      },
    }),
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 100000 },
  })
);
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

const PORT = 8080;

app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);
app.use("/cart", cartRouter);
app.use("/realtimeproducts", realTimeRouter);
app.use("/chat", messagesRouter);
app.use("/", homeRouter);
app.use("/register",userRouter)

const server = app.listen(PORT, () => {
  console.log(`🔥 Listening on port ${PORT}`);
});
server.on("error", (err) => console.log(err));

export const socketServer = new Server(server);

const messages = [];
socketServer.on("connection", (socket) => {
  console.log("Nueva Conexion");
  socket.on("disconnect", () => {
    console.log("Cliente desconectado");
  });
  socket.on("message", (data) => {
    console.log("Servidor:", data);
    messages.push(data);
    socketServer.emit("message", data);
    postMessage(data);
  });
});
