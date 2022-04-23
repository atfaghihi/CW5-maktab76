let users = [{name:"ali", address:[], phone:[]}, {name:"amin", address:[], phone:[]}]

// let newUser1 = JSON.parse(JSON.stringify(users));
// newUser1[0].name = "sara";
// console.log(JSON.stringify(users));
// console.log(users[0].name);
// console.log(newUser1[0].name);

const newUser2 = [{...users[0]}, {...users[1]}];
newUser2[0].name = "sara";
console.log(users[0].name);
console.log(newUser2[0].name);