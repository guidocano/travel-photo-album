window.onload = iniciar;

function iniciar() {
    document.getElementById('send').addEventListener('click', validate, false);
}

function valida_nombre() {
    var elemento = document.getElementById('nombre')
    if (elemento.value == ''){
        alert('El campo Nombre no puede estar vacio.');
        return false
    }
    return true;
}


function valida_email() {
    var elemento = document.getElementById('email')
    if (elemento.value == ''){
        alert('El campo Email no puede estar vacio.');
        return false
    }
    return true;
}

function valida_edad() {
    var elemento = document.getElementById('edad')
    if (elemento.value == 0){
        alert('Debe seleccionar una edad.');
        return false
    }
    return true;
}

function valida_comentario() {
    var elemento = document.getElementById('comentario')
    if (elemento.value == ''){
        alert('El campo Comentario no puede estar vacio.');
        return false
    }
    return true;
}


function validate(e) {
    if(valida_nombre() && valida_email() && valida_edad() && valida_comentario() && confirm('Desea enviar el formulario?')){
        return true;
    }   else{
        e.preventDefault();
        return false;
    }

}