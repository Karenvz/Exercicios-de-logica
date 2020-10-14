let mensagem = 'meu nome e karen e tenho dois ano no brasil'

function codificador(texto) {
    let letras = texto.split('')
    let resultado = []

    for (let letra of letras) {
        switch (letra) {
            case 'e':
                resultado.push('enter')
                break;
            case 'i':
                resultado.push('imer')
                break;
            case 'a':
                resultado.push('ai')
                break;
            case 'o':
                resultado.push('ober')
                break;
            case 'u':
                resultado.push('ufat')
                break;
            default:
                resultado.push(letra)
        }
    }
    return resultado.join('')
}
console.log(codificador(mensagem))