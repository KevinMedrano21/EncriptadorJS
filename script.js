// function encriptar() {
//     texto = document.getElementById("input").value;

//     if (texto.includes("e")) {
//         enter = texto.replace(/e/g, "enter");
//         console.log(enter);
//     }
//     else if (texto.includes("i")) {
//         imes = texto.replace(/i/g, "imes");
//         console.log(imes);
//     }
//     else if (texto.includes("a")) {
//         ai = texto.replace(/a/g, "ia");
//         console.log(ai);
//     }
//     else if (texto.includes("o")) {
//         ober = texto.replace(/o/g, "ober");
//         console.log(ober);
//     }
//     else if (texto.includes("u")) {
//         utaf = texto.replace(/u/g, "utaf");
//         console.log();
//     }
//     else{
//         console.log("El texto que ingreso no es valido.")
//     }

//     console.log(texto);
    
    
    
// }

function encriptar() {
    texto = document.getElementById("input").value;

    let resultado = texto.replace(/e/g, "enter")
                        .replace(/i/g, "imes")
                        .replace(/a/g, "ia")
                        .replace(/o/g, "ober")
                        .replace(/u/g, "utaf");

    console.log(resultado);

    let h1 = document.querySelector("h1");
    let h3 = document.querySelector("h3");
    let img = document.querySelector("img")
    img.style.display = "none"
    h1.style.display = "none";
    h3.innerHTML = resultado;


}

function visualizarMensaje(){
    if(resultado == true){
        let h1 = document.querySelector("h1");
        h1.innerHTML = resultado;
    }
}

function desencriptar(){
    texto = document.getElementById("input").value;

    let resultado = texto.replace(/enter/g, "e")
                        .replace(/imes/g, "i")
                        .replace(/ia/g, "a")
                        .replace(/ober/g, "o")
                        .replace(/utaf/g, "u");

    console.log(resultado);

    let h1 = document.querySelector("h1");
    let h3 = document.querySelector("h3");
    let img = document.querySelector("img")
    img.style.display = "none"
    h1.style.display = "none";   
    h3.innerHTML = resultado;
}