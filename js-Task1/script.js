function nock() {
    document.getElementById("high").innerHTML = "<i>JAVASCRIPT TASK-1</i>"
    document.getElementById("high").style.fontWeight="600"
    document.getElementById("high").style.color = "darkblue"

    document.getElementById("hig").innerHTML = "<i>JAVASCRIPT TASK-1</i>"
    document.getElementById("hig").style.fontWeight="600"
    document.getElementById("hig").style.color = "darkblue"
}
function fun1() {
    document.getElementById("high").style.backgroundColor = "yellow"
    document.getElementById("high").style.textAlign = "center"

    document.getElementById("hig").style.backgroundColor = "yellow"
    document.getElementById("hig").style.textAlign = "center"
}
function fun2() {
    document.getElementById("para").style.color = "white"

    document.getElementById("par").style.color = "white"
}
function fun3() {
    document.getElementById("para").style.backgroundColor = "green"

    document.getElementById("par").style.backgroundColor = "green"
}
function nick() {
    document.getElementById("para").style.padding = "30px"
    document.getElementById("high").style.padding = "30px"

    document.getElementById("par").style.padding = "30px"
    document.getElementById("hig").style.padding = "30px"
}
function fun4() {
    document.getElementById("high").style.border = "3px solid lightblue"
    document.getElementById("para").style.border = "3px solid lightblue"
    document.getElementById("high").style.borderRadius="30px"
    document.getElementById("para").style.borderRadius="30px"
    document.getElementById("para").style.fontWeight="600"
    document.getElementById("para").style.fontSize="18"
    document.getElementById("para").style.textAlign="center"

    document.getElementById("hig").style.border = "3px solid lightblue"
    document.getElementById("par").style.border = "3px solid lightblue"
    document.getElementById("hig").style.borderRadius="30px"
    document.getElementById("par").style.borderRadius="30px"
    document.getElementById("par").style.fontWeight="600"
    document.getElementById("par").style.fontSize="18"
    document.getElementById("par").style.textAlign="center"
}
function runAll() {
    nock();
    fun1();
    fun2();
    fun3();
    nick();
    fun4();
}