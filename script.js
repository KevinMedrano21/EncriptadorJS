

//Funcion para encriptar
function encriptar() {
    texto = document.getElementById("input").value;

    let resultado = texto.replace(/e/g, "enter")
                        .replace(/i/g, "imes")
                        .replace(/a/g, "ia")
                        .replace(/o/g, "ober")
                        .replace(/u/g, "utaf");

    console.log(resultado);

    let h2 = document.querySelector("h2");
    let h3 = document.querySelector("h3");
    let img = document.querySelector("img")
    img.style.display = "none"
    h2.style.display = "none";
    h3.innerHTML = resultado;
    limpiarTexto();
    
}

function limpiarTexto(){
    document.getElementById("input").value = "";
}



//Funcion para visualizar mensaje
function visualizarMensaje(){
    if(resultado == true){
        let h2 = document.querySelector("h2");
        h2.innerHTML = resultado;
    }
}

//Funcion para desencriptar
function desencriptar(){
    texto = document.getElementById("input").value;

    let resultado = texto.replace(/enter/g, "e")
                        .replace(/imes/g, "i")
                        .replace(/ia/g, "a")
                        .replace(/ober/g, "o")
                        .replace(/utaf/g, "u");

    console.log(resultado);

    let h2 = document.querySelector("h2");
    let h3 = document.querySelector("h3");
    let img = document.querySelector("img")
    img.style.display = "none"
    h2.style.display = "none";   
    h3.innerHTML = resultado;
    limpiarTexto();
}


//Funcion para copiar el texto
function copiarTexto(){
    let texto = document.getElementById("texto").innerText;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado!");
    });
}