let celsius = document.getElementById("celsius");
let fahren = document.getElementById("fahren");
function cou(){
    
    let output = (parseFloat(celsius.value)*9)/5+32;
    fahren.value = parseFloat(output.toFixed(2));
}
function fah(){
    
    let output = (parseFloat(fahren.value)-32)*5/9;
    celsius.value = parseFloat(output.toFixed(2));
}