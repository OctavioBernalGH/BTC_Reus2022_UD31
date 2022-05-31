var fecha = new Date();
console.log(fecha.toString());
console.log(fecha.getDate());
console.log(fecha.getUTCMonth());
let expresion = new RegExp(fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear());
console.log("Expresion: " + expresion);
cadena = "Nací el 28/5/2022 en Donostia";
console.log(expresion.exec(cadena));
var email = prompt('Introduce dirección email: ');
var emailRegex = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

if (emailRegex.test(email)) {
    alert('Válido!');
} else {
    alert('No válido!');
}
const re = /(\w+)\s(\w+)/;
const str = 'John Smith';
console.log(str.replace(re, '$2, $1'));
var regex = /(<([^>]+)>)/ig;
body = "<p>test</p>";
result = body.replace(regex, "");
console.log(result);