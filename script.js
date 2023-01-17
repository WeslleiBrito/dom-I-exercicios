const frutas = ["laranja", "limão", "uva"];


function listarFrutas() {
    let indice = 0
    for (item of frutas) {
        let fruta = document.getElementById(`fruta-${indice + 1}`)
        fruta.innerHTML = item
        indice++
    }
}

function imprimirNoConsole() {
    let nomeFruta = document.getElementById("nome-fruta")
    console.clear()
    console.log(nomeFruta.value)
}

function inserirNovaFruta() {
    let nomeFruta = document.getElementById("nome-fruta")
    frutas.push(nomeFruta.value)
    listarFrutas()
    nomeFruta.value = ""
}

listarFrutas()