function input(data) {
    document.getElementById("result").value += data
}
function equal() {
    var res = document.getElementById("result").value
    var ans = eval(res)
    document.getElementById("result").value = ans
}
function cl() {
    document.getElementById("result").value = ""
}