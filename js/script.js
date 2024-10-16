function GeneratePassword(length = 0) {
    const characters = [
        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
        "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
        "0","1","2","3","4","5","6","7","8","9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
        "{","[","}","]",",","|",":",";","<",">",".","?","/"
    ];

    let firstPass = "";
    let secondPass = "";

    let firstField = document.getElementById("first-pass");
    let secondField = document.getElementById("second-pass");


    for (let i = 0; i < length; i++) {
        firstPass += characters[Math.floor(Math.random() * characters.length)];
        secondPass += characters[Math.floor(Math.random() * characters.length)];
    }

    firstField.value = firstPass;
    secondField.value = secondPass;

    return { firstPass, secondPass };
}

document.getElementById("generate-btn").addEventListener("click", function () {
    let lengthInput = document.getElementById("length-field").value;
    let userLength = parseInt(lengthInput);

    if (isNaN(userLength) || userLength <= 0) {
        alert("Invalid length! Setting length to 8 by default.");
        userLength = 0;
    }

    GeneratePassword(userLength);
});

function copyClipboard(id) {
    const copyText = document.getElementById(id);
    
    copyText.select();
    copyText.setSelectionRange(0, copyText.value.length);

    try {
        alert("Copied the text: " + copyText.value);
    } catch (err) {
        alert("Failed to copy text: " + err);
    }
}
