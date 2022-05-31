const grid = new Muuri('.grid', {
    layout: {
        rounding: false
    }
});

window.addEventListener('load', () => {

    //metodo de muuri para ir acomodando las imagenes cuando se achique la pantalla
    grid.refreshItems().layout();

    document.getElementById('grid').classList.add('imagenes-cargadas');

    //Parte del filtrado de las imagenes, en la constante enlaces se estan guardando todas las categorias del header
    const enlaces = document.querySelectorAll('#categorias a');
    enlaces.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
            evento.preventDefault();
            enlaces.forEach((enlace) => enlace.classList.remove('activo'));
            evento.target.classList.add('activo');

            const categoria = evento.target.innerHTML.toLowerCase();
            categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
        });
    });
});