// 2.2-vazifa
let userName = prompt('iltimos ismingizni kiriting ');
let userSurnamae = prompt('iltimos familiyangizni kiriting');
let userBorm = prompt('tug`ilgan yilingizni kiriting');
let year = 2022;
let userborn = year - userBorm;

if (userBorm >= 18 ){
    alert("Assolomaleykum" + userName +" "+ userSurnamae+" " + userborn +" siz armiyaga qabul qildingiz");
} else if (userBorm < 18 ){
    alert("Assolomaleykum " + userName+" " + userSurnamae+" siz " + userborn +  "yoshda bo'lganigiz uchun  armiyaga qabul qilinmadingiz")
}else {
    alert('iltios son kiriting');
}








