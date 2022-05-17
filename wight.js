function calculator(){
var weight = parseFloat(document.getElementById("weight").value);
var height = parseFloat(document.getElementById("height").value);

var bmi = (weight / (height * height) )
document.getElementById("show").innerHTML = bmi


if (bmi <= 18.5) {
document.getElementById("bmi5").innerHTML =  "underweight"

}
else if (bmi >= 18.5 && bmi <=24.9 ) {
    document.getElementById("bmi5").innerHTML =  "normal"
    
    }
 else if (bmi >= 25 && bmi <=29.9 ) {
    document.getElementById("bmi5").innerHTML =  "overweight"
    
    }

else {
    document.getElementById("bmi5").innerHTML =  "oberstiy"
    
    }
}
