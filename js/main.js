window.onscroll = function () {
    myFunction()
};

function myFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100h) {
        document.getElementById("BGeeta").className = "Bgeeta";
        document.getElementById("UGeeta").className = "Ugeeta";
    } else {
        document.getElementById("BGeeta").className = "";
        document.getElementById("UGeeta").className = "";
    }
}
