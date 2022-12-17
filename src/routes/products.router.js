import { Router } from "express";
import productos from "../ProductManager.js"

const router=Router();


router.get('/',(req,res)=>{
    const allProducts =JSON.parse(productos.getProducts())
    const {limit}=req.query;

    //verifico si el valor del limite es un numero valido
    if(limit===false || isNaN(limit)){
       res.json(allProducts);  
    }
    else{
        res.json(allProducts.slice(0,limit))
    }
})


router.get("/:id", (req, res) => {
    const {id}=req.params;
    const oneProduct =productos.getProductById(Number(id))
    console.log(oneProduct);-
    res.json(oneProduct); 
    
});
router.post('/',(req,res)=>{
    productos.addProduct(req.body)
    res.status(201).json(productos.getProducts());
})

router.delete('/:id', (req, res)=>{
    productos.deleteProduct(id)
    res.status(200).json(productos.getProducts());
})
router.put('/:id', (req, res)=>{
    const {id}=req.params;
    productos.updateProduct(id,req.body)
    res.status(200).json(productos.getProducts());
})

export default router;