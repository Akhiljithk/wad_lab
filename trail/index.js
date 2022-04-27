var data = window.prompt("Enter a 4 digit number")
var dig = []
for (let i = 0; i < 4; i++) {
    dig[i] = parseInt(data[i])
    dig[i] = (dig[i] + 7) % 10;


}
console.log(dig)
//swap
var temp
temp = dig[0]
dig[0] = dig[2];
dig[2] = temp


temp = dig[1]
dig[1] = dig[3]
dig[3] = temp

console.log(dig)
let name1 = dig.toString();
document.getElementById("hi").innerHTML = "encryed msg is " + name1;
// agin swap to get back to same 
temp = dig[2]
dig[2] = dig[0];
dig[0] = temp


temp = dig[3]
dig[3] = dig[1]
dig[1] = temp

console.log(dig)

// 0 - 7 - 7
// 1 - 8 - 8
// 2 - 9 - 9
// 3 - 10 - 0
// 4 - 11 - 1
// 5 - 12 - 2
// 6 - 13 - 3
// 7 - 14 - 4
// 8 - 15 - 5
// 9 - 16 - 6


for (let i = 0; i < 4; i++) {
    if ((dig[i] >= 3) && (dig[i] <= 9)) {
        dig[i] = dig[i] - 7
    }
    else {
        dig[i] = dig[i] + 3
    }

}
console.log(dig);
document.getElementById("he").innerHTML = "decrypted msg is " + dig