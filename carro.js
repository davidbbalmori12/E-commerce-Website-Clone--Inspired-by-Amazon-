export let carro = JSON.parse(localStorage.getItem('carro')) || [];

export function agregaralcarro(producto){
    let productoEnCarro;
    
    carro.forEach((objeto) => {
        if(producto.descripcion === objeto.nombre) {
            productoEnCarro = objeto;
        }
    });
    
    if(productoEnCarro) {
        productoEnCarro.cantidad += 1;
    } else {
        carro.push({
            nombre: producto.descripcion,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: 1
        });
    }
    guardarcarro();
    
}
function guardarcarro(){
    localStorage.setItem('carro',JSON.stringify(carro));
}
export function actualizarcarro(){
    let numProducto = 0;
    carro.forEach((objeto) => {
        numProducto += objeto.cantidad;
    });
    
    document.querySelector('.numProductos').innerHTML = numProducto;
    console.log(carro);
}
export function eliminar(nomelim){
    const nuevocarro=[];
    carro.forEach((producto) =>{
        if(producto.nombre != nomelim){
            nuevocarro.push(producto);
        }
    })
    carro =nuevocarro;
    guardarcarro();
}