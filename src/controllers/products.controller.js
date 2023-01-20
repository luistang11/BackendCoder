import * as ProductService from "../services/products.services.js";
import {STATUS} from '../constants/constants.js'



export async function getProducts(req, res) {
  try {
    const response = await ProductService.getProducts();
    res.json({
        products: response,
        status:STATUS.SUCCESS,

    });
  } catch (error) {
    res.status(400).json({ 
        error: error.message,
        ststus:STATUS.FAIL
    })
  }
}
export async function getProduct(req, res) {
    try {
        const { idProducto } = req.params;
        const response = await ProductService.getProduct(idProducto);
        res.json({
          user: response,
          status: STATUS.SUCCESS,
        });
      } catch (error) {
        res.status(400).json({
          error: error.message,
          status: STATUS.FAIL,
        });
      }
}
export async function createProduct(req, res) {
  try {
    const {body} = req;
    const response=await ProductService.createProduct(body);
    res.json({
        user:response,
        status: STATUS.SUCCESS,
    })
  } catch (error) {
    res.status(400).json({
        error: error.message,
        status: STATUS.FAIL,
      });
  }
}

export async function updateProduct(req, res) {
  try {
    const { idProducto } = req.params;
    const { body } = req;
    const response = await ProductService.updateProduct(idProducto, body);
    res.status(201).json({
      user: response,
      status: STATUS.SUCCESS,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      status: STATUS.FAIL,
    });
  }
}
export async function deleteProduct(req, res) {
  try {
    const { idProducto } = req.params;
    await ProductService.deleteProduct(idProducto);
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
