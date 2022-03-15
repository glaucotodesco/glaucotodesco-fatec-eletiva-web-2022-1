var prods = [
    { id: 1, name: "Produto 1", price: 10.0 },
    { id: 1, name: "Produto 2", price: 20.0 },
];

function calc(){

       
    saida.innerHTML = '';
    var quantities = document.getElementsByName("quantity");
    
    for (let input of quantities) {
        saida.innerHTML += ` Produto: ${prods[input.id-1].name}  - Preço: ${prods[input.id-1].price} - Quantidade: ${input.value} </br>`
    }

    
}

