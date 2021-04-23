let defaultOwnerData = {firstName: "마틴", lastName: "파울러"};

function defaultOwner()       {return defaultOwnerData;}
function setDefaultOwner(arg) {defaultOwnerData = arg;}


let spaceship = {};
spaceship.owner = defaultOwner();
console.log(spaceship);

setDefaultOwner({firstName: "레베카", lastName: "파슨스"});
spaceship.owner = defaultOwner();
console.log(spaceship);
