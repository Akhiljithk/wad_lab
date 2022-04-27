function check() {
  var data = document.getElementById("text-feild").value;
  var dup = "";
  for (let i = data.length - 1; i >= 0; i--) {
    dup = dup.concat(data[i]);
  }
  if (data == dup) {
    document.getElementById("errMsg").innerHTML = "its a palindrome";
  } else {
    document.getElementById("errMsg").innerHTML = "its not a palindrome";
  }
}
