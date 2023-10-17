function copiarAlPortapapeles() {
    var texto = "https://www.facebook.com/LalaWeen/";
    var aux = document.createElement("input");
    aux.setAttribute("value", texto);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    alert("Comparte este enlace en tus redes sociales para obtener un descuento: " + texto);
}