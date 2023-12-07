const passwordBox=document.getElementById('password');
const length=12;
const button=document.getElementById('btn');
const copyButton=document.getElementById('copy')


const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbols="@#$*[]/\|-+={}~^";

const allChars=upperCase+lowerCase+number+symbols;
function createPassword(){
    let password="";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbols[Math.floor(Math.random()*symbols.length)];

    while(length>password.length){
        password+=allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value=password;
}

button.addEventListener("click",()=>{
    createPassword();
})

function copyPassword(){
passwordBox.select();
document.execCommand("copy");
}

copyButton.addEventListener("click",()=>{
    copyPassword();
})