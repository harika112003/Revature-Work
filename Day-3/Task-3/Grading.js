//code to give grade based on student marks

function grading(marks){
    let grade;
    if(marks >= 90 && marks<100){
        grade="A";
    }
    else if(marks>=80 && marks<89){
        grade="B";
    }
    else if(marks>=70 && marks<79){
        grade="C";
    }
    else if(marks>=60 && marks<69){
        grade="D";
    }
    else{
        grade="F"
    }
    console.log(grade);
}
grading(90);