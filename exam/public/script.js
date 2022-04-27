function click_name() {
    let data = document.getElementById("user_name").value
    if (data.length < 5) {
        document.getElementById("errMsg").innerHTML = "min 5"
    }
}

function val_pass() {
    let data = document.getElementById("pass").value
    if (data.length < 8) {
        document.getElementById("pas_errMsg").innerHTML = "min 8"
    }
}
function sel_op() {
    let data = document.getElementById("select").value
    if (data == 2) {
        document.getElementById("sel_errMsg").innerHTML = "get offer"
    }
}
function check() {
    if (document.getElementById("select").unchecked) {

        document.getElementById("che_errMsg").innerHTML = "u need to check"
    }
}