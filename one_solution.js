// let  obj10 ={
//     name:'Sachin',
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
// console.log(reCopy(obj10),'console')



let  obj1 ={
    name:'Sachin',
    education :{
        masters:{
            major:"Telecom",
            minor:"Management"
        }
    }
 }
 
 let  obj2 = {...obj1}
 obj2.name="New and Improved Sachin"
 obj2.education.masters.major="Computer Science"
 
 console.log(obj1.name);
 console.log(obj1.education.masters.major);

 // Shallow Copy
 // Deep Copy 
 // Rest and Spread operatotors ( )
 
 console.log(obj1.education.masters.major);