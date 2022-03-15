function calc(){

    var quantities = document.getElementsByName("quantity");
    
    saida.innerHTML = '';
    
    for (let input of quantities) {
        saida.innerHTML += ` Id do Elemento = ${input.id}  - Value do Elemento ${input.value} </br>`
    }
}