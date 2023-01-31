import {ProductsModel} from '../dao/models/products.models.js'

export async function getProducts(limit, page,sort,query){
    try {
        if(!limit){
            limit=10;
        }
        const product= await ProductsModel.paginate({},{limit,page,sort,query,lean:true})
        return product
    } catch (error) {
        throw new Error(error.message)
    }
}

export async function getProduct(idusuario){
    try {
        const product= await ProductsModel.findById(idusuario);
        return product
    } catch (error) {
        throw new Error(error.message)
    }
}
export async function createProduct(data){
    try {
        const producto=await ProductsModel.create(data);
        return producto;
    } catch (error) {
        throw new Error(error.message)
    }
}
export async function updateProduct(idProducto,data){
    try {
        const updatedUser = await ProductsModel.findByIdAndUpdate(idProducto, data, { new: true });
        return updatedUser;
    } catch (error) {
        throw new Error(error.message)
    }
}
export async function deleteProduct(idProduct){
    try {
        await ProductsModel.delete({ _id: idProduct });
      } catch (error) {
        throw new Error(error.message);
      }
}