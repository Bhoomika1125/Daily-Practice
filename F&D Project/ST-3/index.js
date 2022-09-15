document.getElementById("btn").addEventListener("click", calculate);
function calculate(){
    var earthweight= document.getElementById("entr").value;

    var mercweight= 0.378*earthweight;
    document.getElementById("mercweight").innerHTML= "Your weight is " +mercweight;

    var venusweight= 0.91*earthweight;
    document.getElementById("venusweight").innerHTML= "Your weight is " +venusweight;

    document.getElementById("earthweight").innerHTML= "Your weight is " +earthweight;

    var marsweight= 0.377*earthweight;
    document.getElementById("marsweight").innerHTML= "Your weight is " +marsweight;

    var jupweight= 2.528*earthweight;
    document.getElementById("jupweight").innerHTML= "Your weight is " +jupweight;

    var satweight= 1.064*earthweight;
    document.getElementById("satweight").innerHTML= "Your weight is " +satweight;

    var uraweight= 0.889*earthweight;
    document.getElementById("uraweight").innerHTML= "Your weight is " +uraweight;

    var nepweight= 1.125*earthweight;
    document.getElementById("nepweight").innerHTML= "Your weight is " +nepweight;

    var plutoweight= 0.067*earthweight;
    document.getElementById("plutoweight").innerHTML= "Your weight is " + plutoweight.toFixed(2);
}