var output = document.getElementById("output");
var output2 = document.getElementById("output2");
var output3 = document.getElementById("output3");
var output4 = document.getElementById("output4");

//if (localStorage.getItem("savings") == "NaN") {
//    localStorage.setItem("savings","0");
//}
if (sessionStorage.getItem("priceTotal") == null) {
    sessionStorage.setItem("priceTotal","0.00");
}

if (sessionStorage.getItem("tax%") == null) {
    sessionStorage.setItem("tax%","15");
}




function updateLocal(key_, documentID) {
    localStorage.setItem(key_,document.getElementById(documentID).value.toString());
    display();
    
}

function updateSession(key_, documentID) {
    sessionStorage.setItem(key_,document.getElementById(documentID).value.toString());
    display();
    
}


function incrementSessionByNum() {

    var key_ = "priceTotal";
    var documentID = "productPrice";
    // increment
    var currentAmount = parseFloat(sessionStorage.getItem(key_));
    var incrementBy = parseFloat(document.getElementById(documentID).value);

 
    
    sessionStorage.setItem(key_,currentAmount + incrementBy);

    // if amount is NaN, set to 0.
    if (sessionStorage.getItem(key_) == "NaN") {
        sessionStorage.setItem(key_,"0.00");
    }


    // 

    if (sessionStorage.getItem("tax%") == "NaN") {
        sessionStorage.setItem("tax%","15");
    }

    display();
    
}

function display() {

    output2.innerHTML = sessionStorage.getItem("priceTotal");

    output3.innerHTML = sessionStorage.getItem("tax%");

    // calculate total

    var priceTotalNum = parseFloat(sessionStorage.getItem("priceTotal"));
    var taxMultiplier = parseFloat(sessionStorage.getItem("tax%")) / 100.0;
    taxMultiplier += 1.0;

    output4.innerHTML = (priceTotalNum * taxMultiplier).toFixed(2);

}




display();
