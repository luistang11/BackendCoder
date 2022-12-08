import { writeFileSync, readFileSync} from 'fs';

export default class ProductManager {
  constructor() {   
    this.products = [];
    this.path='./archivos.txt';
  }
  //private methods
  #getMaxId() {
  let maxId = 0;
  this.products.map((producto) => {
      if (producto.id > maxId) maxId = producto.id;
  });
  return maxId;
  }
  #readFile(){
    return readFileSync('archivos.txt','utf-8')
  }
  //methods
  addProduct(title,description,price,thumbnail,code,stock) {
    const isInProducts=this.products.find(item=>item.code===code)?true:false;

    const product = {
        id:this.#getMaxId() + 1,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
    };

    if(!isInProducts){
        this.products.push(product);
        writeFileSync(this.path,JSON.stringify(this.products)+`\n`)
    }
    else{
        console.log('code repetido')
    }
  }

  getProducts(){
    return this.#readFile();
  }

  getProductById(idProduct) {
    const readFile= JSON.parse(this.#readFile());
    const product=readFile.find(item=>item.id===idProduct);
    if(product){
        return product
    }
    else{
        console.log('not found')
    }
  }

    updateProduct(id,object) { //pendiente
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

    deleteProduct(id){
        let newArrayProducts = this.products.filter((product) => product.id !== id);
        if(newArrayProducts){
            this.products=newArrayProducts;
        writeFileSync(this.path,JSON.stringify(this.products))
        }
        else{
            console.log('not found')
        }
    }
};