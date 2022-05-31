function calc(){
    var distance = parseFloat(document.getElementById("meterinput").value);
    var unit = document.getElementById("unit").value;

    if (unit == "KALVIN") {
        var convertdistance = distance *   1000     ;
        document.getElementById("answer").value = convertdistance + " milimeter";
    }
    else if (unit == "centigrade") {
        var convertdistance = distance * 100;
        document.getElementById("answer").value = convertdistance + " centimeters";
    }
    else if (unit == "farheinheit") {
        var convertdistance = distance / 3281;
        document.getElementById("answer").value = convertdistance + " kilometer";
    }
    else if (unit == "INCHES") {
        var convertdistance = distance / 2.54;
        document.getElementById("answer").value = convertdistance + " inches";
    }
    else  {
        document.getElementById("answer").value = "Choose Input Correctly";
    }


}