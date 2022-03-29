$('#inputPrice').mask("#.##0,00", {reverse: true});


function getAsNumber(inputId){
    var price = document.getElementById(inputId).value;
    price = price.replace(/\./g, '').replace(',', '.');
    
    return price;
}

