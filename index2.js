let stateObject = {
    tehran:["shaher Ray","Shemira","Varamin"],
    esfahan:["kashan","Daran","ardestan"]
    };
function addState(state){
return {...stateObject, ...state};
}

function addCity(city, state){
    return stateObject[state] = [...stateObject[state], ...city];
}

console.log(addState({yazd: []}));
console.log(addCity(["rast"], "tehran"));

// const stateObject = {
//     missouri: ["springfield", "rolla"],
//     nevada: ["carlin", "vegas"],
//     }
//     const addState = (...states) => {
//     states.forEach(state => stateObject[state] = []);
//     }
//     const addCity = (state, ...cities) => {
//     stateObject[state] = [...stateObject[state], ...cities];
//     }
//     // test
//     addState('California', 'Texas')
//     addCity('California', 'Los Angeles')
//     addCity('Texas', 'Austin', 'Houston')
//     console.log(stateObject)
 


// let stateObject = {
//     california: ["losAngeles", "SanFrancisco", "SanDiego"],
//     texas: ["Austin", "Houston", "Dallas"],
//     };
//     function addingStates(newStates) {
//     return { ...stateObject, ...newStates };
//     }
//     let newObject = addingStates({ Florida: [] });
//     console.log(newObject);
//     function addingCity(state, city) {
//     return (newObject[state] = [...newObject[state], city]);
//     }
//     console.log(addingCity("Florida", "miami"));
    
    