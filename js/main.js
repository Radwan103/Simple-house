function switchSalad() {
    document.getElementById("row-1").style.display = "none";
    document.getElementById("row-3").style.display = "none";
    document.getElementById("row-2").style.display = "grid";
}
function switchNuddels() {
    document.getElementById("row-1").style.display = "none";
    document.getElementById("row-2").style.display = "none";
    document.getElementById("row-3").style.display = "grid";
}
function switchPizza(){
    document.getElementById("row-3").style.display = "none";
    document.getElementById("row-2").style.display = "none";
    document.getElementById("row-1").style.display = "grid";
}

console.log(5%1);