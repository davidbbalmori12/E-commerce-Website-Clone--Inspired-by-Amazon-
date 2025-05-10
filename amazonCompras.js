import {carro,eliminar} from '/carro.js';
console.log(carro);
let productoshtml2 ='';
carro.forEach(productos => {
    productoshtml2+=`
                <div class="cajaProductos" id="producto-${productos.nombre.replace(/\s+/g, '-').toLowerCase()}">
                <h1 style="margin-left:1.2rem; color: rgb(22, 110, 22);">Fecha de envio:Miercoles,Mayo 5</h1>
                <div class="productos">
                    <div class="producto">
                        <div class="productoImg">
                            <img src="${productos.imagen}" alt="">
                        </div>
                        <div class="productoInfo">
                            <P class="descripcion">${productos.nombre}</P>
                            <p class="Precio">$${productos.cantidad * productos.precio}</p>
                            <p>Cantidad: ${productos.cantidad }</p>
                            <a href=""class="eliminar" data-product-id="${productos.nombre}">eliminar</a>
                        </div>
                    </div>
                    <div class="opcionesDia">
                            <h3>Escoge tu forma de envio:</h3>
                            
                            <div class="Dia">
                                <input type="radio" id="option1" name="shipping" checked>
                                <div class="option-details">
                                    <div class="date">Lunes,Mayo 5</div>
                                    <div class="price free">Envio gratis</div>
                                </div>
                            </div>
                            
                            <div class="Dia">
                                <input type="radio" id="option2" name="shipping">
                                <div class="option-details">
                                    <div class="date">Sabado,Mayo 3</div>
                                    <div class="price">$100 - Costo</div>
                                </div>
                            </div>
                            
                            <div class="Dia">
                                <input type="radio" id="option3" name="shipping">
                                <div class="option-details">
                                    <div class="date">Viernes, Mayo 2</div>
                                    <div class="price">$210 - Costo</div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
`
});
let numProducto = 0;
let total = 0;

carro.forEach((objeto) => {
    numProducto += objeto.cantidad;
    total += objeto.precio * objeto.cantidad;
});
let impuestos = total * .05;
document.querySelector('.cajaProducto').innerHTML = productoshtml2
document.querySelector('.precio').innerHTML =`
                <h1>Resumen de cuenta</h1>
                <div class="cuenta">
                    <div class="cuentaInfo">
                        <p>productos: ${numProducto}</p>
                        <p>${total}</p>
                    </div>
                    <div class="cuentaInfo">
                        <p>Impuestos(5%)</p>
                        <p>${impuestos.toFixed(2)}</p>
                    </div>
                    <hr>
                <div class="cuentaInfo total">
                    <p>Total por pagar</p>
                    <p>${(total + impuestos).toFixed(2)}</p>
                </div>
                <button>Completar orden</button>
`
document.querySelector('.seleccion').innerHTML =`Seleccionaste(${numProducto})articulos`;
document.querySelectorAll('.eliminar').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const nomelim = link.dataset.productId; 
        eliminar(nomelim);
        console.log(carro);
        const contenedor = document.querySelector(`#producto-${nomelim.replace(/\s+/g, '-').toLowerCase()}`);
        console.log(contenedor);
        contenedor.remove();
    });
});
