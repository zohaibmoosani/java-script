function calc(){
    var distance = parseFloat(document.getElementById("meterinput").value);
    var unit = document.getElementById("unit").value;

    if (unit == "pound") {
        var convertdistance = distance * 454        ;
        document.getElementById("answer").value = convertdistance + " pound";
    }
    else if (unit == "ton") {
        var convertdistance = distance * 907;
        document.getElementById("answer").value = convertdistance + " ton";
    }
    else if (unit == "KG") {
        var convertdistance = distance / 1000;
        document.getElementById("answer").value = convertdistance + " kg";
    }
    else  {
        document.getElementById("answer").value = "Choose Input Correctly";
    }


}