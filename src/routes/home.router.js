import { Router } from "express";
import productos from "../ProductManager.js"
const router=Router();

router.get('/',(req,res)=>{
    const products=JSON.parse(productos.getProducts());
    res.render("home",{
        products,
    })
})

export default router;