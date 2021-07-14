
// let  obj1 ={
//     name:'Sachin',
//     education :{
//         masters:{
//             major:"Telecom",
//             minor:"Management"
//         }
//     }
// }

// let str = "hello hwlo"
// str= str + 'hellow'

// let newstr = str  //pass by value 


// obj1.address='167 winthrop '

// console.log(obj1,'obj1');

// let  obj2 ={...obj1}  

// shallow and deep 

// ********************************************************************

// function* gen() {

//     for(i=0;i<10<i++){
//         yield 
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
// let  obj10 ={
//     name:'Sachin',
//     education :{
//         masters:{
//             major:"Telecom",
//             minor:"Management",
            
//         }
//     }
// }

// *********************************************************************

// Write a program to compare to compare two objects to determine if they have exactly same properties and value 

let  obj11 ={
    name:'Sachin',
    gav:'gav',
    education :{
        masters:{
            major:"Telecom",
            minor:"Management",
            
        }
    }
}
function reCopy(obj) {
    let copy= {}

for (let key in obj) {
    let v = obj[key]
    if (typeof v === "object") {
        copy[key] = reCopy(v);
      } else {
        copy[key] = v;
      }

}
// console.log(copy);
return copy 
    

}
console.log(reCopy(obj1q),'console')

// Architectal Pattern




