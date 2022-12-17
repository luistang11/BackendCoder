import { writeFileSync, readFileSync} from 'fs';

class CartManager {
  constructor() {   
    this.carts = [];
    this.path='./carts.json';
  }
  //private methods
  #getMaxId() {
  let maxId = 0;
  this.carts.map((producto) => {
      if (producto.id > maxId) maxId = producto.id;
  });
  return maxId;
  }
  #readFile(){
    return readFileSync('carts.json','utf-8')
  }


  //methods
  addCart(products) {
    const isInCart=this.carts.find(item=>item.code===code);

    const product = {
        id:this.#getMaxId() + 1,
        products:products
    };

    if(!isInCart){
        this.carts.push(product);
        writeFileSync(this.path,JSON.stringify(this.carts))
    }
    else{
        console.log('code repetido')
    }
  }
  addProduct(id,quantity){
    const readFile= JSON.parse(this.#readFile());
    const index=readFile.findIndex(item=>item.products.id===id);
    const reemplazo={
        id,
        quantity:quantity+=quantity,
    };

    if(index!==-1){
        readFile.splice(index,1,reemplazo)
        writeFileSync(this.path,(readFile))
    }
    else{
        console.log('not found')
    }
  }
  
  getCarts(){
    return this.#readFile();
  }

  getCartById(idCart) {
    const readFile= JSON.parse(this.#readFile());
    const cart=readFile.find(item=>item.id===idCart);
    if(cart){
        return cart
    }
    else{
        console.log('not found')
    }
  }

    updateCart(id,object) {
        const readFile= JSON.parse(this.#readFile());
        const index=readFile.findIndex(item=>item.id===id);
        const reemplazo={
            id:id,
            ...object
        }
        if(index!==-1){
            readFile.splice(index,1,reemplazo)
            writeFileSync(this.path,(readFile))
        }
        else{
            console.log('not found')
        }
    }

    deleteCart(id){
        let newArraycarts = this.carts.filter((cart) => cart.id !== id);
        if(newArraycarts){
            this.carts=newArraycarts;
        writeFileSync(this.path,JSON.stringify(this.carts))
        }
        else{
            console.log('not found')
        }
    }
};

export default new CartManager();