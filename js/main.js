//2-vazifa
let userName = prompt('iltimos ismingizni kiriting ');
let userSurnamae = prompt('iltimos familiyangizni kiriting');
let userBorm = prompt('tug`ilgan yilingizni kiriting');

if (userBorm > 18 || userBorm >= 2004){
    alert("Assolomaleykum" + userName +" "+ userSurnamae+" " + userBorm +" siz armiyaga qabul qildingiz");
} else if (userBorm < 18 || userBorm < 2004 ){
    alert("Assolomaleykum " + userName+" " + userSurnamae+" siz " + userBorm +  "yoshda bo'lganigiz uchun  armiyaga qabul qilinmadingiz")
}else {
    alert('iltios son kiriting');
}








