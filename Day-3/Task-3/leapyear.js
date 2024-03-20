//code to check whether a year is leap year or not

function chkleapyear(){
    let year=parseInt(prompt("Enter a year:"));
    if(year%4 ==0 || year%400==0 && year%100 != 0){
        console.log("Leap Year");
    }
    else{
        console.log("Not a leap year");
    }
}

chkleapyear();
