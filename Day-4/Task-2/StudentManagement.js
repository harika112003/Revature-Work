let studentdetails={
    Name:"",
    age:0,
    Grade:"",
  
    displayInfo: function(){
    console.log("Student Information:")
    console.log("Name:"+this.Name),
    console.log("Age:"+this.age),
    console.log("Grade:"+this.Grade)
  }
}
studentdetails.Name=prompt("Enter the name of the student");
studentdetails.age=parseInt(prompt("Enter the age of student"));
studentdetails.Grade=prompt("Enter the grade:");

studentdetails.displayInfo();
