var persons=[];
var p1={
    Name:"Harika",
    City:"Kakinada",
    Age:20
};
var p2={
    Name:"abc",
    City:"Kakinada",
    Age:20
};
var p3={
    Name:"abc1",
    City:"Kakinada",
    Age:20
};

persons.push(p1,p2,p3);

function printNames() {
    var outputDiv = document.getElementById('names');
    outputDiv.innerHTML = '';

    persons.forEach(function(user) {
        var nameHeader = document.createElement('h1');
        nameHeader.textContent = user.name;
        outputDiv.appendChild(nameHeader);
    });
}



