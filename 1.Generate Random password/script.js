// function generatePassword() {
//     const length = 12;
//     const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

//     let password = "";
//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * charset.length);
//         password += charset.charAt(randomIndex);
//     }

//     document.getElementById("password-display").innerText = password;
// }


let inputpass = document.getElementById('password');
function createPassword() {
    let length = 13;

    let allchar = 'ABCDFGIPJWRTRTREPDFGEHGYRIUTLYKHFRGJVNBFDHUYETreyeutdfgbfdshjrtiufghbfdyhtujcvdfjuyutygrt!#$%$%$%&^&*&^(*&*)(*_~!+><?><?"|{P}P{}<>?><?!@#!#$%$^%*&^*&(*&()12345567890'

    let password = '';
    for (let index = 0; index < length; index++) {
        let generatePassinput = Math.floor(Math.random() * allchar.length)
        password += allchar.charAt(generatePassinput) 
        
    }

    inputpass.value = password;
    
}


function copypass() {
    inputpass.select();
    document.execCommand('copy');
}