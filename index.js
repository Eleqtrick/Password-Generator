document.getElementById("generate-password").onclick = function () {
   let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<,>.?/;:[{]}-_=+!@#$%^&*()~`";
   let password = "";
   let charsLength = chars.length;
   let person = window.prompt("Enter a password length: ");
   let num1 = parseInt(person);

   for (var i = 0; i < num1; i++) {
    let randNum = Math.floor(Math.random() * charsLength);
    password += chars.substring(randNum, randNum + 1);

    document.getElementById("password").value = password;
   }
}

document.getElementById("copy").onclick = function () {
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy"); 
}