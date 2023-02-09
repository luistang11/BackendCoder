import {getProducts} from "../services/products.services.js";



export function obtenerVistaLogin(req,res){
    res.render('login',{title:"Inicio"});
}


export async function obtenerVistaProductos(req,res){
    try {
        const {limit, page,sort,query}= req.query;
        const data = await getProducts(limit, page,sort,query);
        res.render('home', {...data});
    } catch (error) {
        throw new Error(error.message)
    }
}