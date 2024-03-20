//code for Number Guess game
const randomNumber = Math.floor(Math.random() * 100) + 1;
let guess=1;
document.getElementById("submitguess").onclick = function () {
    let user_num = document.getElementById("number").value;

    if (randomNumber == user_num) {
        alert("You guessed it right!!");
    }
    else if (randomNumber < user_num) {
        guess++;
        alert("You guessed it higher..");
    }
    else {
        guess++;
        alert("You guessed it lower...");
    }

}