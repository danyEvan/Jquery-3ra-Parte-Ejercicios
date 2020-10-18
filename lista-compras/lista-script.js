$(document).ready(function () {
    
    let descripcion = "",
        cantidad    = 0, 
        precio      = 0, 
        precioPorCantidad = 0, 
        sumaCantidad      = 0,
        sumaTotal         = 0;


    $('#boton').click(function(){
        descripcion = $('#desc').val().trim();
        cantidad    = Number($('#cant').val());
        precio      = Number($('#precio').val())
        sumaCantidad = sumaCantidad + cantidad;
        precioPorCantidad = cantidad * precio;
        sumaTotal    = sumaTotal + precioPorCantidad;
        $('#cantArt').text(`Art:   ${sumaCantidad}`);
        $('#total').text(`$ ${sumaTotal}` );
        $('#tablero').append(`<div class="row  border d-flex justify-content-between"><p class="col-6 ">${descripcion}</p><p class="col-2 ">${cantidad}</p><p class="col-3">$ ${precio}<i class="pl-2 fas fa-heart text-danger"></i></p></div>`)
        $('input').val("");
    })



});