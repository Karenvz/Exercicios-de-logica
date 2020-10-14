let mensagem = 'menterufat nobermenter enter kairentern enter tenternhober doberimers ainober nober braisimerl'

function decodificador(texto) {

    //Para cada palabra a sustituir
    let letras = texto.split('enter')
    let resultado = letras.join('e');
    //
    letras = resultado.split('imer')
    resultado = letras.join('i');
    //
    letras = resultado.split('ai')
    resultado = letras.join('a');
    //
    letras = resultado.split('ober')
    resultado = letras.join('o');
    //
    letras = resultado.split('ufat')
    resultado = letras.join('u');

    return resultado
}
console.log(decodificador(mensagem))