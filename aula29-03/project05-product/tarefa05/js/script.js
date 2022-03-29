var products = [
    { id: 1, name: "Compuatador M1-TX", description: "Intel I7, 16GB, SSD 256, HD 1T", price: 4900, category: 1, promotion: true, new: true },
    { id: 2, name: "Computador M2-TX", description: "Intel I7, 32GB, SSD 512, HD 1T", price: 5900, category: 2, promotion: false, new: true },
    { id: 3, name: "Computador M1-T", description: "Intel I5, 16GB, HD 1T", price: 2900, category: 3, promotion: false, new: false },
];

var categories = [
    { id: 1, name: "Produção Própria" },
    { id: 2, name: "Nacional" },
    { id: 3, name: "Importado" }
];


//On Load
loadProducts();

//Load products
function loadProducts() {
    for (let prod of products) {
        addProd(prod);
    }
}

function save(){

    var newProd = {  id:            products.length+1,
                     name:          document.getElementById("inputName").value,
                     description:   document.getElementById("inputDescription").value,
                     price:         getAsNumber('inputPrice'),
                     category:      categories[ document.getElementById('selectCategoria').value - 1].id,
                     promotion:     document.getElementById('checkPromotion').checked,
                     new:           document.getElementById('checkNewProduct').checked,
                    };
    
    addProd(newProd);
    products.push(newProd);
}


//Add product
function addProd(prod) {

    var prodTable = document.getElementById("productsTable");
    var newRow = prodTable.insertRow();

    //Load id
    var idNode = document.createTextNode(prod.id);
    newRow.insertCell().appendChild(idNode);

    //Load name
    var nameNode = document.createTextNode(prod.name);
    newRow.insertCell().appendChild(nameNode);

    //Load description
    var descriptionNode = document.createTextNode(prod.description);
    newRow.insertCell().appendChild(descriptionNode);

    //Load price
    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    var priceNode = document.createTextNode(formatter.format(prod.price));
    newRow.insertCell().appendChild(priceNode);

    //Load category
    var categoryNode = document.createTextNode(categories[prod.category - 1].name);
    newRow.insertCell().appendChild(categoryNode);

    //Load options
    var options = '';
    if (prod.promotion) {
        options = "<span class='badge bg-success'>P</span>";
    }

    if (prod.new) {
        options += " <span class='badge bg-primary'>L</span>";
    }

    newRow.insertCell().innerHTML = options;
}






