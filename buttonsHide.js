function first() {
    document.getElementById("second_hide").setAttribute("style", "opacity:1; transition: 1s; height: 100%;");
    document.getElementById("truck").setAttribute("style", "display: none");
    document.getElementById("first_yelloy").setAttribute("style", "display: block");
}
function firstYelloy() {
    document.getElementById("second_hide").setAttribute("style", "display: none");
    document.getElementById("first_yelloy").setAttribute("style", "display: none");
    document.getElementById("truck").setAttribute("style", "display: block");
}
function second() {
    document.getElementById("three_hide").setAttribute("style", "opacity:1; transition: 1s; height: 100%;");
    document.getElementById("lefttruck").setAttribute("style", "display: none");
    document.getElementById("second_yelloy").setAttribute("style", "display: block");
}
function secondYelloy() {
    document.getElementById("three_hide").setAttribute("style", "display: none");
    document.getElementById("second_yelloy").setAttribute("style", "display: none");
    document.getElementById("lefttruck").setAttribute("style", "display: block");
}
function done() {
    document.getElementById("done_hide").setAttribute("style", "opacity:1; transition: 1s; height: 100%;");
    document.getElementById("righttruck").setAttribute("style", "display: none");
    document.getElementById("done_yelloy").setAttribute("style", "display: block");
}
function doneYelloy() {
    document.getElementById("done_hide").setAttribute("style", "display: none");
    document.getElementById("done_yelloy").setAttribute("style", "display: none");
    document.getElementById("righttruck").setAttribute("style", "display: block");
}
function calend() {
    document.getElementById("calend_hide").setAttribute("style", "opacity:1; transition: 1s; height: 100%;");
    document.getElementById("calendare").setAttribute("style", "display: none");
    document.getElementById("calend_yelloy").setAttribute("style", "display: block");
}
function calendYelloy() {
    document.getElementById("calend_hide").setAttribute("style", "display: none");
    document.getElementById("calend_yelloy").setAttribute("style", "display: none");
    document.getElementById("calendare").setAttribute("style", "display: block");
}