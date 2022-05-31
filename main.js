const grid = new Muuri('.grid', {
    layout: {
        rounding: false
    }
});

window.addEventListener('load', () => {

    //metodo de muuri para ir acomodando las imagenes cuando se achique la pantalla
    grid.refreshItems().layout();

    document.getElementById('grid').classList.add('imagenes-cargadas');
})