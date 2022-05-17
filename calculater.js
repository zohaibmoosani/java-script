function calculator(){
    var num1 = parseInt(document.getElementById("onetxt").value);
    var num2 = parseInt(document.getElementById("twotxt").value);
    var dropdown = document.getElementById("opertor").value;

    if (dropdown == "+") {
        var result = num1 + num2;
        document.getElementById("show").innerHTML = num1 + " + " + num2 + " = " + result;
    }
    else if (dropdown == "-") {
        var result = num1 - num2;
        document.getElementById("show").innerHTML = num1 + " - " + num2 + " = " + result;
    }
    else if (dropdown == "*") {
        var result = num1 * num2;
        document.getElementById("show").innerHTML = num1 + " * " + num2 + " = " + result;
    }
    else if (dropdown == "/") {
        var result = num1 / num2;
        document.getElementById("show").innerHTML = num1 + " / " + num2 + " = " + result;
    }
    else if (dropdown == "square") {
        var num1Sq = num1 * num1;
        var num2Sq = num2 * num2;

        document.getElementById("show").innerHTML = num1 + " => " + num1Sq + "<br/>" + num2 + " => " + num2Sq;
    }
    else if (dropdown == "cube") {
        var num1Sq = num1 * num1 * num1;
        var num2Sq = num2 * num2 * num2;

        document.getElementById("show").innerHTML = num1 + " => " + num1Sq + "<br/>" + num2 + " => " + num2Sq;
    }
    else{
        document.getElementById("show").innerHTML = "Invalid Input";

    }
}

