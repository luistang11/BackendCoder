import * as CartService from "../services/carts.services.js";
import { STATUS } from "../constants/constants.js";

export async function getCarts(req, res) {
  try {
    const response = await CartService.getCarts();

    res.json({
      carts: response,
      status: STATUS.SUCCESS,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      ststus: STATUS.FAIL,
    });
  }
}

export async function getCartByID(req, res) {
  try {
    const { cid } = req.params;
    const response = await CartService.getCart(cid);
    
    res.json({
      cart: response,
      status: STATUS.SUCCESS,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      ststus: STATUS.FAIL,
    });
  }
}

export async function createCart(req, res) {
  try {
    const { body } = req;
    const response = await CartService.createCart(body);
    res.json({
      cart: response,
      status: STATUS.SUCCESS,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      status: STATUS.FAIL,
    });
  }
}

export async function addProductToCart(req, res) {
  try {
    const { cid } = req.params; //id cart
    const cart = await CartService.getCart(cid);
    const { pid } = req.params; //producto id
    cart.productos.push(pid)
    cart.save();
    res.status(201).json({
      product: cart,
      status: STATUS.SUCCESS,
    });
    
  } catch (error) {
    res.status(400).json({
      error: error.message,
      status: STATUS.FAIL,
    });
  }
}

export async function updateProductToCart(req,res){
  try {
    const { cid } = req.params; //id cart
    const cart = await CartService.getCart(cid);

    const { pid } = req.params; //producto id

    const productsCart = cart.productos; //solo me sirve el array
    const quantityBody = req.body;//le paso la cantidad por body
    //busco el indice del array de los productos
    const index = productsCart.findIndex((item) => {
      item.id === pid;
    });

    const reemplazo = {
      pid,
      quantity: quantityBody,
    };

    if (index !== -1) {
      const reemplazofinal = productsCart.splice(index, 1, reemplazo);

      const response = await CartService.updateCart(cid, reemplazofinal);
      res.status(201).json({
        product: response,
        status: STATUS.SUCCESS,
      });
    } else {
      //si el indice no coincide, crea un producto
      const reemplazofinal= productsCart.push(reemplazo)
      const response =await CartService.updateCart(cid,reemplazofinal)
      res.status(201).json({
        product: response,
        status: STATUS.SUCCESS,
      });

    }
  } catch (error) {
    res.status(400).json({
      error: error.message,
      status: STATUS.FAIL,
    });
  }
}
export async function updateCart(req,res) {
  try {
    const{cid}=req.params
    const {updateProducts}=req.body;
    const response = await CartService.updateCart(cid,updateProducts)
    res.status(200).json({
      product: response,
      status: STATUS.SUCCESS,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      status: STATUS.FAIL,
    });
  }
}

export async function deleteProductFromCart(){
  const { cid } = req.params; //id cart
  const cart = await CartService.getCart(cid);
  const { pid } = req.params;
  const productsCart = cart.productos; //solo me sirve el array

  const reemplazo = productsCart.filter(item=> item.id === pid)
  const response =await CartService.updateCart(cid,reemplazo)
  res.status(200).json({
    product: response,
    status: STATUS.SUCCESS,
  });
}

export async function deleteCart(req,res) {
  try {
    const { cid } = req.params;
    await CartService.deleteCart(cid);
    res.status(201).json({
      message: "Producto borrado correctamente",
      status: STATUS.SUCCESS,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      status: STATUS.FAIL,
    });
  }
}