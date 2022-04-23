 let user = {
    name: 'Mike',
    friend: ["John", "Paul", "Jimmy"],
    families:[{name:"David", age:20} , {name:"Ava", age:25}],
    location: {
    region:"England",
    country:"United Kingdom"
    },
    aboutMe: {
    status: "Single",
    pet: "Dog",
    }
    }
let {aboutMe} = user;
console.log(aboutMe);
let {
    location: {region: region2}
 } = user;
console.log(region2);
let {friend: [John]} = user;
console.log(John);
let{
    families: [{name}, {age}],
} = user;
console.log(name, age);