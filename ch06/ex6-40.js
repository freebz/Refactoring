let defaultOwner = {firstName: "마틴", lastName: "파울러"};

let spaceship = {};
spaceship.owner = defaultOwner;
console.log(spaceship);

defaultOwner = {firstName: "레베카", lastName: "파슨스"};
spaceship.owner = defaultOwner;
console.log(spaceship);
