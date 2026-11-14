// script
const btnCalcular = document.getElementById('btnCalcular');
const inputPrecio = document.getElementById('precioOriginal');
const inputPorcentaje = document.getElementById('porcentajeDescuento');
const divResultado = document.getElementById('resultado');

btnCalcular.addEventListener('click', () => {
    const valorPrecio = inputPrecio.value.trim();
    const valorPorcentaje = inputPorcentaje.value.trim();

    
    if (valorPrecio === '' || valorPorcentaje === '') {
        alert('De ingresar precio y porcentaje validos');
        return;
    }

    const precioOriginal = parseFloat(valorPrecio);
    const porcentaje = parseFloat(valorPorcentaje);

    if (isNaN(precioOriginal) || isNaN(porcentaje) || precioOriginal < 0 || porcentaje < 0 || porcentaje > 100) {
        alert('De ingresar precio y porcentaje validos');
        return;
    }

    
    const descuento = precioOriginal * (porcentaje / 100);
    const precioFinal = precioOriginal - descuento;

   
    divResultado.textContent = `Nuevo Precio Q Q{precioFinal.toFixed(2)}`;
});
