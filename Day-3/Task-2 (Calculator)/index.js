var sum=(n1,n2) => {
    console.log(n1+n2);
}

var Subtract=(n1,n2) => {
    console.log(n1-n2);
}

var Multiply=(n1,n2) => {
    console.log(n1*n2);
}

function calculator(){
    console.log("1.Sum \n2.Minus\n3.Multiply");
    var userUnput = parseInt(prompt("Enter num to peform operation"));
    var n1=parseInt(prompt("Enter First number:"));
    var n2=parseInt(prompt("Enter Second number"));
    switch(userUnput){
    case 1: 
     sum(n1,n2);
     break;
    case 2:
        Subtract(n1,n2);
        break;
    case 3:
        Multiply(n1,n2);
        break;
    default:
        console.log("Input invalid");
        break;
    }

}
calculator();