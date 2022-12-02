import { writeFileSync, readFileSync} from 'fs';

class ProductManager {

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
    return this.products;
  }

  getProductById(idProduct) {

    const readFile= JSON.parse(this.#readFile());
    const isInProducts=readFile.find(item=>item.id===idProduct)?true:false;
    const isProduct=readFile.find(item=>item.id===idProduct)
    if(isInProducts){
        console.log(isProduct)
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

const producto=new ProductManager();
producto.addProduct('producto prueba','Este es un producto prueba',200,'sin imagen','abc123',1);
producto.addProduct('producto prueba2','Este es un producto prueba2',200,'sin imagen2','abc1234',2);
producto.addProduct('producto prueba3','Este es un producto prueba3',200,'sin imagen3','abc12345',3);
producto.addProduct('producto prueba','Este es un producto prueba',200,'sin imagen','abc123',25);
console.log(producto.getProducts());
producto.getProductById(2)
producto.deleteProduct(1)
producto.addProduct('producto prueba','Este es un producto prueba4',200,'sin imagen4','abc1243',4);
console.log(producto.getProducts());