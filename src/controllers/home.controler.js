import {getProducts} from "../services/products.services.js";


export async function obtenerProductos(req,res){
    try {

        const {limit, page,sort,query}= req.query;
        const data = await getProducts(limit, page,sort,query);
        console.log(data);
        res.render('home', {...data});
    } catch (error) {
        throw new Error(error.message)
    }
}