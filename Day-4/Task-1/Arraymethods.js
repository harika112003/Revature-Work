var Items=[];

var it1={
    Name:"Coffee",
    Category:"Beverage",
    Price:150
}

var it2={
    Name:"Milkshake",
    Category:"Beverage",
    Price:200
}

var it3={
    Name:"Iced tea",
    Category:"Beverage",
    Price:250
}
var it4={
    Name:"Croissant",
    Category:"Snack",
    Price:300
}
var it5={
    Name:"French fries",
    Category:"Snack",
    Price:200
}
Items.push(it1);
Items.push(it2);
Items.push(it3);
Items.push(it4);
Items.push(it5);

console.log(Items);

//Task-1:Reduce the price of each item by 50

var newItems=Items.map(e=>(
    {
     ...e,
     Price: e["Price"]-50
    }
));

console.log(newItems);

//Task-2: Get the total value of all products 

var Totalvalue=Items.reduce((acc,e) => acc+e.Price,0);

console.log(Totalvalue);