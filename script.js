let inputTextTo = document.querySelector(".type-text");
let inputEncripted = document.querySelector("#text-cript");
let textDemo = document.querySelector("#text-demo")
let image = document.querySelector(".image-high");

function verifyEmpty() {

    
    /*      Verificação de caixa de texto vazio     */
    
    /*----------------------------------------------*/
    
}


function cript() {
    
    /*                  declaração                  */
    let textToCript = inputTextTo.value;
    let emptyText = true;
    /*----------------------------------------------*/

    if (textToCript.length == 0) {
        emptyText = true;
        return alert("Você não inseriu nenhum texto para ser criptografado/descriptografado!")
    } else {
        emptyText = false;
    }
    

    if (!emptyText) {
        /*                 substituição                 */
        textToCript = textToCript.replace(/a/g, "ai");
        textToCript = textToCript.replace(/e/g, "enter");
        textToCript = textToCript.replace(/i/g, "imes");
        textToCript = textToCript.replace(/o/g, "ober");
        textToCript = textToCript.replace(/u/g, "ufat");
        /*----------------------------------------------*/

        /*                style and text                */
        inputEncripted.style.margin = "32px auto";
        inputEncripted.innerHTML = '<textarea disabled rows="30" style="color: black; width: 100%; font-size: 25px; resize: none">' + textToCript + "</textarea>";
        image.remove();
        textDemo.remove();
        /*----------------------------------------------*/
    }

}

function descript() {

    /*                  declaração                  */
    let textToCript = inputTextTo.value;
    let emptyText = true;
    /*----------------------------------------------*/

    if (textToCript.length == 0) {
        emptyText = true;
        return alert("Você não inseriu nenhum texto para ser criptografado/descriptografado!")
    } else {
        emptyText = false;
    }

    if (!emptyText) {
        /*                 substituição                 */
        textToCript = textToCript.replace(/ufat/g, "u");
        textToCript = textToCript.replace(/ober/g, "o");
        textToCript = textToCript.replace(/imes/g, "i");
        textToCript = textToCript.replace(/enter/g, "e");
        textToCript = textToCript.replace(/ai/g, "a");
        /*----------------------------------------------*/

        /*                style and text                */
        inputEncripted.style.margin = "32px auto";
        inputEncripted.innerHTML = '<span style="color: black; font-size: 20px">' + textToCript + "</span>";
        image.remove();
        textDemo.remove();
        /*----------------------------------------------*/
    }

}
