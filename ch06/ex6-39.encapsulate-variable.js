// 변수 캡슐화하기
// Encapsulate Variable


let defaultOwner = {firstName: "마틴", lastName: "파울러"};


// ▼


let defaultOwnerData = {firstName: "마틴", lastName: "파울러"};
export function defaultOwner()       {return defaultOwnerData;}
export function setDefaultOwner(arg) {defaultOwnerData = arg;}
