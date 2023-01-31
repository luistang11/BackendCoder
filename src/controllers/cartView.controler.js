import * as CartService from "../services/carts.services.js";

export async function getCartByID(req, res) {
  try {
    const { cid } = req.params;
    const response = await CartService.getCart(cid);
    res.render("cart", { ...response });
  } catch (error) {
    throw new Error(error.message);
  }
}
