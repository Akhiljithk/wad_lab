function val_name() {
    let data = document.getElementById("name").value
    if (data.length < 5) {
        document.getElementById("name_err").innerHTML = "Shouldnt be less than 5 chracters"
    }
}
function pass() {
    let data = document.getElementById("password").value
    if (data.length < 8) {
        document.getElementById("pas_err").innerHTML = "Shouldnt be less than 8 chracters"
    }

}
function val_dd() {
    let x = document.getElementById("dd").value
    if (x == 2) {
        document.getElementById("err_dd").innerHTML = "save 500 in 100 yr plan"

    }
}
// document.getElementById("btn").addEventListener("click", (event) => { event.preventDefault() })
function submit_data() {

    if (document.getElementById('check').checked) { console.log("checked"); }
    else {
        console.log("unchecked");
        document.getElementById("checkbox").innerHTML = "You must agree to the terms "
    }
}

