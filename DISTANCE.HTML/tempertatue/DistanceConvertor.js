function calc() {
    var distance = parseFloat(document.getElementById("meterinput").value);
    var unit = document.getElementById("unit").value;

    if (unit == "KALVIN") {
        var convertdistance = distance - 273.15;
        document.getElementById("answer").value = convertdistance + " =`C";
    }
    else if (unit == "centigrade") {
        var convertdistance = (distance * 9 / 5 + 32)
            ;
        document.getElementById("answer").value = convertdistance + " centigrade";
    }
    else if (unit == "farheinheit") {
        var convertdistance = (distance - 32 * 5 / 9)
        document.getElementById("answer").value = convertdistance + " farheinheit";
    }
    else {
        document.getElementById("answer").value = "Choose Input Correctly";
    }


}
