// var physic = parseInt(prompt("total marks"))
// var urdu  = parseInt(prompt("total marks"))
// var chemistry = parseInt(prompt( " total marks"))
// var bio = parseInt(prompt("total marks"))
// var english = parseInt(prompt("total marks"))

// var total = physic  + urdu +  chemistry +  bio + english 
// var  percantage =  (total * 100 ) / 500  

// document.write("total" + total   + "</br> <hr/>")
// document.write("total" + percantage +"%"+ "</br> <hr/>" )


// if(percantage >=80)
// {
//     document.write("you got A+")
// }
// else if (percantage >=70)
// {
//     document.write("you got A")
// }

// else if (percantage >=60)
// {
//     document.write("you got b")
// }

// else if (percantage >=50)
// {
//     document.write("you got c")
// }
// else {
//     document.write("you are fail") 
// }

// var email = prompt("enter email")
// var password = prompt("enter pwd")

// if (email == "admin@gmail.com" && password == "123"){
//     document.write ("welcome admin ")
// }
// else {
//     document.write ("eror 404")

// }
 
document.write("<h1> Zohaib Loan service <h1/> <hr/>")


var age = parseInt(prompt("enter your age"))
var gender = (prompt("enter your  gender"))
var assest = parseInt(prompt("enter your  assest"))


if ((age >= 16 && age >= 25) && (gender == "male") && (assest > 2000)) {
    document.write("<h3> you*re eligible for Rs.1lac ");
}
else if ((age >= 16 && age >= 22) && (gender == "female") && (assest > 2000)) {
    document.write("<h3> you*re eligible for Rs.1lac ");
}
else if ((age >= 25 && age >= 30) && (gender == "female") && (assest > 5000)) {
    document.write("<h3> you*re eligible for Rs.250000 ");
}
else if ((age >= 23 && age >= 30) && (gender == "female") && (assest > 4000)) {
    document.write("<h3> you*re eligible for Rs.2lac ");
}


else{
    document.write("<h3>  you*re not eligible for Rs.100000 ");
    
}
