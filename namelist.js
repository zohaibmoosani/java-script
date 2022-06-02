function adddata(){
    var txtboxvalue = document.getElementById("username").value

    var list = document.getElementById("drop");

    var createli = document.createElement("option");

    var data = document.createTextNode(txtboxvalue);

    createli.appendChild(data);

    list.insertBefore(createli,list.firstChild);
    
    document.getElementById("username").value ="";

}