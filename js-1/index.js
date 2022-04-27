function check() {
    var data = document.getElementById("text").value
    console.log(data);
    if ((data.length < 4) || (data.length > 4)) {
        document.getElementById("errMsg").innerHTML = "error message"
        window.alert("poda m***");
    }
    else {
        var sum = Math.pow(data[0], 4) +
            Math.pow(data[1], 4) +
            Math.pow(data[2], 4) +
            Math.pow(data[3], 4)

        if (sum == data) {
            document.getElementById("errMsg").innerHTML = "amstrong number"
        }
        else {
            document.getElementById("errMsg").innerHTML = " not an amstrong number"
        }
    }
}
