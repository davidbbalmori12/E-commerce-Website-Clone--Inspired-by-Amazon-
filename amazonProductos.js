import {productos} from '/productos.js'
let productoshtml ='';
productos.forEach(producto => {
    productoshtml+=`
            <div class="producto">
                <img src="${producto.imagen}" alt="" class="imagen">
                <a href="" class="descripcion">${producto.descripcion}</a>
                <img src="imagenes/rating-${producto.estrellas}.png" alt="" class="estrellas">
                <p class="precio">$${producto.precio}</p>
                <select name="" id="" class="seleccion">
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <button class="agregar" data-product-name="${producto.descripcion}">Agregar al carrito</button>
            </div>`
});
document.querySelector('.productos').innerHTML = productoshtml
import {carro, agregaralcarro, actualizarcarro} from '/carro.js';

document.querySelectorAll('.agregar').forEach((boton, index) => {
    boton.addEventListener('click', () => {
        const producto = productos[index]; 
        agregaralcarro(producto);
        actualizarcarro();
    });
});
actualizarcarro();