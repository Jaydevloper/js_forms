// let name = "Jahongir Mirzo";
// let sure = "Rajabov";

// console.log(name, sure);

// let n =100;
// for (i = 0; i <= n; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
// 1-vazifa
// let a = prompt('')
// if (a%2 ==! 0){
//     alert( a + " soni " +`toq son`);
// } else if(a%2 == 0){
//     alert( a + " soni " +`juft son`);
// } else{
//     alert('iltimos son kiriting');
// }
// 2-vazifa 
 
// let userName = prompt('iltimos ismingizni kiriting ');
// let userSurnamae = prompt('iltimos familiyangizni kiriting');
// let userBorm = prompt('tug`ilgan yilingizni kiriting');

// if (userBorm > 18 || userBorm >= 2004){
//     alert("Assolomaleykum" + userName +" "+ userSurnamae+" " + userBorm +" siz armiyaga qabul qildingiz");
// } else if (userBorm < 18 || userBorm < 2004 ){
//     alert("Assolomaleykum " + userName+" " + userSurnamae+" siz " + userBorm +  "yoshda bo'lganigiz uchun  armiyaga qabul qilinmadingiz")
// }else {
//     alert('iltios son kiriting');
// }
// 2-usul

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









