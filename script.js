let inputTextTo = document.querySelector(".type-text");
let inputEncripted = document.querySelector("#text-cript");
let image = document.querySelector(".image-high");

function cript() {
    
    let textToCript = inputTextTo.value;
    inputEncripted.style.margin = "32px auto"
    inputEncripted.innerHTML = '<span style="color: black">' + textToCript + "</span>";
    image.remove();

}

function descript() {

}
