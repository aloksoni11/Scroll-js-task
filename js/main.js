window.onscroll = function () {
    myFunction()
};

function myFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("BGeeta").className = "Bgeeta";
        document.getElementById("UGeeta").className = "Ugeeta";
    }
    else {
        document.getElementById("BGeeta").className = "";
        document.getElementById("UGeeta").className = "";
    }
}
console.log(document.body.scrollTop);

function slider() {
    var myArray = ["1", "2", "4", "5", "6", "7", "8", "9"];
    var x = parseInt(Math.random() * (myArray.length));
    var sl = document.getElementById("slide");
    sl.innerHTML = "<img src='images/" + myArray[x] + ".jpg' class='img'/>";
}
window.setInterval(slider, 4000);