// Frequency Counter Pattern uses objects to collect information , This way you don't have to run 2 loops 


let a1= [2,4]
let a2= [4,10,2]

// Write a function to check if all the items in a1 are present in a2 , if yes return true else false 

function compareT () {

// let res

// let a1obj={}

// a1.forEach(i=>{
//     if(a1obj[i] ===undefined){
//         a1obj[i]=1
//     }
//     else {
//         a1obj[i]=a1obj[i]+1
//     }
// })
// let a2obj={}
// a2.forEach(i=>{
//     if(a2obj[i] ===undefined){
//         a2obj[i]=1
//     }
//     else {
//         a2obj[i]=a2obj[i]+1
//     }
// })
// if(a1.length !== a2.length || Object.keys(a1obj).length !== Object.keys(a2obj) )
// {
//     return false 
// }

// for (let key in a1obj) {
//     console.log(a1obj[key],a2obj[key]);
//     if(a1obj[key] !== a2obj[key]){
//        res=false
//        break;
//     }
//     else {
//         res=true
//     } 
// }

// return res
// }
// console.log(compareT(a1,a2) )

module.exports={
    compareT
}