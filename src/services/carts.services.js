import {CartsModel} from '../dao/models/carts.models.js';


export async function getCarts(){
    try {
        const carts= await CartsModel.find();
        return carts
    } catch (error) {
        throw new Error(error.message)
    }
}
export async function getCart(idCart){
    try {
        const cart= await CartsModel.findById(idCart).populate("productos");
        return cart 
    } catch (error) {
        throw new Error(error.message)
    }
}
export async function createCart(data){
    try {
        const cart=await CartsModel.create(data);
        return cart;
    } catch (error) {
        throw new Error(error.message)
    }
}
export async function updateCart(id,data){
    try {
        const updatedUser = await CartsModel.findByIdAndUpdate(id, {$set: { productos: data }}, { new: true });
        return updatedUser;
    } catch (error) {
        throw new Error(error.message)
    }

}
export async function deleteCart(id){
    try {
        await CartsModel.delete({ _id: id });
      } catch (error) {
        throw new Error(error.message);
      }
}
