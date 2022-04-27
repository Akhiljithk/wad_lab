function v_name() {
    let data = document.getElementById("name").value
    if (data.length < 5) {
        document.getElementById("err_name").innerHTML = "minimum 5 charachters required"
    }
    else {
        document.getElementById("err_name").innerHTML = ""
    }
}
function v_pass() {
    let data = document.getElementById("password").value
    if (data.length < 8) {
        document.getElementById("err_password").innerHTML = "minimum 8 charachters required"

    }
    else {

        if (/^[A-Za-z]+$/.test(data) || /^[0-9]+$/.test(data)) {

            document.getElementById("err_password").innerHTML = "password must contain number, characters ans $"

        }

        else {
            document.getElementById("err_password").innerHTML = ""

        }

    }

}
function v_pack() {
    let data = document.getElementById("package").value
    // if (data == 1 || data == 2) {
    //     console.log(data);
    //     document.getElementById("err_pack").innerHTML = "1 year is a better option, you dumb fellow"
    // }

    // else {
    //     document.getElementById("err_pack").innerHTML = ""
    // }
    if (data.match("@")) {
        document.getElementById("err_pack").innerHTML = ""
    }else{
        document.getElementById("err_pack").innerHTML = "1 year is a better option, you dumb fellow"
    }
}
function check() {
    console.log("keri");
    var x = false;

    let data = document.getElementById("check")
    if (data.checked) {
        x = true;

        document.getElementById("err_check").innerHTML = ""
        console.log(data.checked);
    }
    else {
        document.getElementById("err_check").innerHTML = "need to check terms and conditions"

        console.log(data.checked);

    }
    return x;

}



/^[A-Za-z]+$/.test(data) || /^[0-9]+$/ 