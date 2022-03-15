

var prods = [
    { id: 1, name: "Produto 1", price: 10.0 },
    { id: 2, name: "Produto 2", price: 20.0 },
];

function calc(){
    saida.innerHTML = '';
    
    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    for (let input of prods) {
        saida.innerHTML += `Preço: ${formatter.format(prods[input.id-1].price)}</br>`
    }
}