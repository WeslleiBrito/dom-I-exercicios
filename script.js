const frutas = ["laranja", "limão", "uva"];

function incluirItensALista(){
    let indice = 0
    for(item of frutas){
        let fruta = document.getElementById(`fruta-${indice + 1}`)
        fruta.innerHTML = item
        indice ++
    }
}


incluirItensALista()