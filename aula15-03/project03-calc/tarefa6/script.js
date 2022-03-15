
function calc(op){

    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = 0;
    

    switch(op)
    {
        case '+': result  = num1 + num2; break;
        case '-': result  = num1 - num2; break;
        case '*': result  = num1 * num2; break;
        case '/': result  = num1 / num2; break;
    }

    document.getElementById("output").value = result;

    var newOutput = num1 + " " + op + " " + num2 + " = " +result;

    document.getElementById("history").innerHTML += "<p>" + newOutput + "</p>";
    
    var list = document.getElementById("history");
    if(list.children.length > 10){
        document.getElementById("history").removeChild(list.childNodes[0]);    
    }
    
    
}

function cleanHistory(){
    document.getElementById("history").innerHTML = "";
}