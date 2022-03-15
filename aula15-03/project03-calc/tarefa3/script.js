function calc(){

    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var sum  = num1 + num2;

    var output = document.getElementById("output");
    output.value = sum;

}