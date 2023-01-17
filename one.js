'use strict'
let  obj1 ={
    name:'Sachin',
    education :{
        masters:{
            major:"Telecom",
            minor:"Management"
        }
    }
}

obj2.name="New and Improved Sachin" 
obj2.education.masters.major="Computer Science" 




// let  obj2 = {...obj1} 
let obj2= {
    ...obj1,
    education: {
        ...obj1.education ,
        masters : {
            major:obj1.education.masters.major,
            minor:obj1.education.masters.minor
        }
    }
}



// console.log(obj1.name);
// console.log(obj1.education.masters.major);

// shallow and deep 

// ********************************************************************

function* gen() {
    for(i=0;i<10;i++){
        yield 
        console.log(i);
    }
} 
// function gen1() {
//     for(let i=0;i<10;i++){
//         // yield 
//         console.log(i);
//     }
// } 



// WATCHERS -
// ()

// ACTIONS- YIELD



// ********
// const obj2 ={
//     ...obj1,
//     education: {
//         ...obj1.education,
//         masters: {
//            ...obj1.education.masters
//         }
//     }
// }

// obj1.education.masters.major="Computer Science"
// console.log(obj2.education.masters.major)
// ********************************************************************

// obj2.name ='Sachin Renamed'
// console.log(obj1.name)

// *********************************************************************

// Deep copy obj1 to obj3 , so no matter what variable we change in obj1 , it should not affect obj3 

// 1st way ; use JSON.Stringify and JSON.Parse Way 


// *********************************************************************
// Deep Copy using recursion , Write a function recopy to copy obj10
let  obj10 ={
    name:'Sachin',
    education :{
        masters:{
            major:"Telecom",
            minor:"Management",
            college :{
                state:"MD"
            }
            
        },
        bachelors:{
            major:"Systems",
            minor:"Mamne",
            college :{
                state:"MD"
            }
            
        },
    }
}

let result = {
    name:'Sachin',
    major:"Telecom",
    minor:"Management",
}

let res= {}
function recur (obj) {
for (let key in obj) {
// console.log(key, obj[key],'FOR KEY IN ')
console.log(typeof obj[key]);
if(typeof obj[key] === 'string') {
    res[key]=obj[key]
}
else {
    console.log(obj[key] ,'I am in else');
    recur(obj[key])
}
}
return res
}
console.log(recur(obj10))

// *********************************************************************

// Write a program to compare to compare two objects to determine if they have exactly same properties and value 

// let  obj11 ={
//     name:'Sachin',
//     gav:'gav',
//     education :{
//         masters:{
//             major:"Telecom",
//             minor:"Management",
            
//         }
//     }
// }

// function reCopy(obj) {
//     let copy= {}

// for (let key in obj) {
//     let v = obj[key]
//     if (typeof v === "object") {
//         copy[key] = reCopy(v);
//       } else {
//         copy[key] = v;
//       }

// }
// // console.log(copy);
// return copy 
    

// }
// console.log(reCopy(obj1q),'console')

// Architectal Pattern




