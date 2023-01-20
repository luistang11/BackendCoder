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
        const cart= await CartsModel.findById(idCart);
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
        
    } catch (error) {
        throw new Error(error.message)
    }

}

