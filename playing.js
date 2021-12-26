const { TestScheduler } = require('jest');
const { slice, includes } = require('lodash');
const nodemon = require('nodemon')
const data = require('./Student_Data.json')
// console.log(data,'data');


// // const mapped = data.map(i => {

// // return  {
// //     ...i,
// //     isValid:false
// // }

// // })
// const mapped = data.slice(0,5)
// .map(i => {
//     let newIsValid = null
// if(i.isValid === undefined) {
//     newIsValid="Not found"
// }
// else if (i.isValid ===true ) {
//     newIsValid=false
// }
// else {
//     newIsValid=true
// }
//     return {
//         ...i,
//         isValid:newIsValid

//     }
// }

// )
// // Ternany Operator


// console.log(mapped, 'mapped');
// // INVERSE
// // false,
// // true, 
// // isValid:"Not Found"
// // Property exists in the object

// // const a ={
// //     d:3
// // }
// // console.log(a.d);
// // console.log(!a.b);

// // null, undefined, 0 ,""

// // let val = "sachin" 

// // val.length >3 ? "value is greater than 3" :"value is less  than 3"

// // Condition ?  Do something if condiiton : Do something become false


// // Gradtion year is 2020 or less :
// // ---------
// 1) 
// Job Title contains Software :

// Add new property : 
// IsSoftwareEngineer : true or false

// 2) Filter out all records where University_Name contains Northeastern

// 3) Filter record where Job title starts with Software 

// 4) Try to get the company from url  ( REGEX ) regular expression

// 5) Given a function arugment - string keyword.search all fields and filter out records
// if that keyword is present in any records..


// Object.values 
// Concatenate all the values from all the properties 



// map , filter -

// Object.keys 
// Object.values
// Object.entries 

// console.log(Object.values(data));

// Method Chaining


// function search (arg) {
//     const ret = data
//     .slice(0,3)
//     .filter(i=>{
//     let val= Object.values(i)
//     console.log(val.join (" "),'JOINED');
//     // console.log(val.includes(arg));
    
//     if( val.join(" ").toLowerCase().includes(arg.toLowerCase())) {
//         return true
//     }
//     // return false
    
//     })
//     // console.log(ret,'ret');
//   return ret
// }

// console.log(search ("university"),"FINAL OUTPIT")


let stateSize = [
    {"state": "Vermont", "sqm": 9623},
    {"state": "New York", "sqm": 54556},
    {"state": "Connecticut", "sqm": 5543},
    {"state": "Pennsylvania", "sqm": 46055},
    {"state": "New Jersey", "sqm": 8729},
    {"state": "Massachusetts", "sqm": 10565},
    {"state": "New Hampshire", "sqm": 9350},
    {"state": "Maine", "sqm": 35385},
    {"state": "Rhode Island", "sqm": 1214},
    ];

    let output = [
        {"state": "Connecticut", "ppl": 3605944, "isNE": true,density:3444},
        {"state": "Maine", "ppl": 1362359, "isNE": true},
        {"state": "Massachusetts", "ppl": 7029917, "isNE": true},
        {"state": "New Hampshire", "ppl": 1377529, "isNE": true},
        {"state": "New Jersey", "ppl": 9288994, "isNE": false},
        {"state": "New York", "ppl": 20201249, "isNE": false},
        {"state": "Pennsylvania", "ppl": 13002700, "isNE": false},
        {"state": "Rhode Island", "ppl": 1097379, "isNE": true},
        {"state": "Vermont", "ppl": 643077, "isNE": true},
        ];
// data
// .slice (0,2)
// .map((i,idx,arr)=>console.log(arr))
// Got a live question on a technical today to return the " desnsity of each state" (population / square milage) from this info:

 
    // 
    //   let reduced= census2020.reduce((accu,next)=> {

//         console.log(accu,next);
//         accu = accu[0]+next.ppl
//         return accu 
//         },{})
//         // Seeding it with initial value

//     // let average = reduced /census2020.length
//     let average = 1.500000000000
   
//     console.log(Math.floor (average),"MATH.FLOOR")
//     console.log(Math.ceil (average),"MATH.CEIL")
//     console.log(Math.round (average),"MATH.ROUND")
// //   1
// //   2
// //   2

        // console.log(reduced);
        // console.log(average.toFixed(2))

        let census2020 = [
            {"state": "Connecticut", "ppl": 2, "isNE": true},
            {"state": "Maine", "ppl": 4, "isNE": true}, 
            {"state": "Massachusetts", "ppl": 1, "isNE": true},
            {"state": "NEW", "ppl": 2, "isNE": true},
            {"state": "New Hampshire", "ppl": 2, "isNE": true},
            {"state": "New Jersey", "ppl": 1, "isNE": false},
            {"state": "New York", "ppl": 1, "isNE": false},
            {"state": "Pennsylvania", "ppl": 1, "isNE": false},
            {"state": "Rhode Island", "ppl": 2, "isNE": true},
            {"state": "Vermont", "ppl": 2, "isNE": true},
            ];

    //       yourfunction (  {"state": "NEW", "ppl": 2, "isNE": true}, 3 )
    //    1) Get first 3 objects
       
    //    2)  get last 2 objects

    //    3)  Given a odd number of array , Give me the middle item

    //    4)  Given an array 
    //    First you need to calculate length
    //    If its odd then you need to give in middle 
    //    If its even then you give me 2 objects in middle

    //    
    //    Insert that first argument in location of second arguement

    // 5) Write a function which takes object first argument and takes second an integar as 
    // //    second argument,

    let str = `Write a function write akes object first argument and takes second an integar as 
    // //    second argument, `

const myRegex = /write/gmi
    // exec 
    // search 
    // Test
    // includes
    // match
    // console.log(str.includes("write"), "INCLUDES")

    // console.log(myRegex.exec(str), "EXEC")
    // console.log(myRegex.test(str), "TEST") //

    // console.log(str.search(myRegex), "SEARCH")
    // console.log(str.match(myRegex), "MATCH")

//    Using replace () , I want you replace all keyword
// let newStr = str.replace(/write/gi, "REPLACED");
// console.log(newStr,'newStr');
// Does it mutate the original 
// What it returns
let arr = [2,5]
let newarr = arr.push(6)
// console.log(arr.push(6));
console.log(arr );