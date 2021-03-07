
let  obj1 ={
    name:'Sachin',
    education :{
        masters:{
            major:"Telecom",
            minor:"Management"
        }
    }
}

let  obj2 ={...obj1}

// console.log(obj2 === obj1)

// ********************************************************************

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
// let  obj12 ={
//     name:'Sachin',
//     city:'reston',
//     education :{
//         masters:{
//             major:"Telecom",
//             minor:"Management",
            
//         }
//     }
// }



// console.log(compareObj(obj11,obj12))