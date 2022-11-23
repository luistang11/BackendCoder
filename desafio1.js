class ProductManager {

  constructor() {   
  this.products = [];
  }

  //private methods
  #getMaxId() {
  let maxId = 0;
  this.products.map((producto) => {
      if (producto.id > maxId) maxId = producto.id;
  });
  return maxId;
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
  }
  else{
      console.log('code repetido')
  }
  }

  getProducts(){
  return this.products;
  }

  getProductById(idProduct) {
  const isInProducts=this.products.find(item=>item.id===idProduct)?true:false;
  if(isInProducts){
     this.products.map(item=>{
      if(item.id===idProduct){
          console.log(item) ;
      }
      }) 
  }
  else{
      console.log('not found')
  }
  

  }
}
const producto=new ProductManager();
producto.addProduct('producto prueba','Este es un producto prueba',200,'sin imagen','abc123',25);
producto.addProduct('producto prueba2','Este es un producto prueba2',200,'sin imagen2','abc1234',25);
producto.addProduct('producto prueba3','Este es un producto prueba3',200,'sin imagen3','abc12345',25);
producto.addProduct('producto prueba','Este es un producto prueba',200,'sin imagen','abc123',25);
console.log(producto.getProducts());
producto.getProductById(2)