let defaultOwner = {firstName: "마틴", lastName: "파울러"};

function getDefaultOwner()    {return defaultOwner;}
function setDefaultOwner(arg) {defaultOwner = arg;}


let spaceship = {};
spaceship.owner = getDefaultOwner();
console.log(spaceship);

setDefaultOwner({firstName: "레베카", lastName: "파슨스"});
spaceship.owner = getDefaultOwner();
console.log(spaceship);
