function enter() {
    var data = document.getElementById("text").value
    var len = data.length
    console.log(len);
    var arr = []
    for (let i = 0; i < len; i++) {
        arr[i] = data[i]
    }
    arr.sort();
    document.getElementById("errMsg").innerHTML = arr[len - 1] + " and " + arr[len - 2] + " are the 2 largest numbers"
}