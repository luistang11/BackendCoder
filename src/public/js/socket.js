import productos from "../ProductManager.js"

let listProducts=productos.getProducts();

const socket = io();

socket.on('listChange', (data) => {
    console.log(data)
    updateList(data);
})
const productsContainer=document.getElementById('productsContainer');


const updateList = (list) => {
    productsContainer.innerHTML = '';
    list.forEach((item) => {
        const product = document.createElement('div');
        product.innerHTML = `
        <p>title: ${item.title}</p>
        <p>description: ${item.description}</p>
        <p>code: ${item.code}</p>
        <p>price: ${item.price}</p>
        <p>status: ${item.status}</p>
        <p>stock: ${item-stock}</p>
        <p>thumbnail: ${item.thumbnail}</p>
        <h2>----------</h2>
                    `;
        productsContainer.appendChild(product);
    })
}