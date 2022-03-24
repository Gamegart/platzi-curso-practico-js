// const precioOriginal = 120;
// const descuento = 15;



// console.log({
//     precioConDescuento,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,

// })

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}