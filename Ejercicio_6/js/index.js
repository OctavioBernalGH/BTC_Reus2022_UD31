/** Setear fecha en los B */
function actualizarHora(){
    var fecha = new Date();

        document.getElementById("horas").innerHTML = fecha.getHours();
        document.getElementById("minutos").innerHTML = fecha.getMinutes();
        document.getElementById("segundos").innerHTML = fecha.getSeconds();

    setTimeout("actualizarHora()",1)

};