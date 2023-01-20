import {getProducts} from "../services/products.services.js";


export async function obtenerProductos(req,res){
    try {
        const data = await getProducts();
        res.render('home', {data:data});
    } catch (error) {
        throw new Error(error.message)
    }
}