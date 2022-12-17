import { Router } from "express";
import carts from "../CartsManager.js"

const router=Router();

router.get('/',(req,res)=>{
    res.json(carts.getCarts());
})

router.get('/:id',(req,res)=>{
    const {id} = req.params;
    res.json(carts.getCartById(id))
});

router.post('/',(req,res)=>{
    carts.addToCart(req.body);
    res.status(201).json(carts);
})
router.post('/:cid/product/:pid',(req,res)=>{
    const {cid,pid} = req.params;
    
    carts.addProduct(pid,quantity)
})




export default router;