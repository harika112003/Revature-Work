// code to print Even numbers 
function printevennum(n){
    for(i=0;i<=n;i++){
        if(i%2==0){
            console.log(i);
        }
    }
}
printevennum(20);

//code to check whether a number is prime or not
function chkprime(a){
    flag=true;
    if(a<=1){
        console.log("Not a prime");
    }
    else{
    for(k=2;k<a;k++){
        if(a%k==0){
            flag=false;
            break;
        }
    }
    if(flag){
        console.log("Prime");
    }
    else{
        console.log("Not a Prime");
    }
    }
}
chkprime(11);
chkprime(20);

//code to print prime numbers upto given number
function checkprime(j){
    flag=true;
    if(j<=1){
        flag=false;
    }
    else{
        for(r=2;r<j;r++){
            if(j%r==0){
                flag=false;
                break;
            }
        }
    }
    return flag;
}
function printprimenum(num){
    for(j=2;j<=num;j++){
        if(checkprime(j)){
            console.log(j);
        }
    }
}
printprimenum(20);