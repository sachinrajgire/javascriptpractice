// const { TestScheduler } = require('jest');
// const { slice, includes } = require('lodash');
// const nodemon = require('nodemon')
// const data = require('./Student_Data.json')
// console.log(data,'data');

// const { reduce } = require("lodash");


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
// map, filter, reduce, forEach, find
// let stateCategory ={
//     superDense:{minSqm:1000,maxSqm:8000},
//     superNova:{minSqm:8000,maxSqm:100000000000},
// }
// let stateSize = [
//     {"state": "Vermont", "sqm": 9623, },
//     {"state": "XNew York", "sqm": 54556},
//     {"state": "Connecticut", "sqm": 5543},
//     {"state": "Pennsylvania", "sqm": 46055},
//     {"state": "XNew Jersey", "sqm": 8729},
//     {"state": "Massachusetts", "sqm": 10565},
//     {"state": "XNew Hampshire", "sqm": 9350},
//     {"state": "Maine", "sqm": 35385},
//     {"state": "Rhode Island", "sqm": 1214},
//     ];

//     let  = ppl[
//         {"state": "Connecticut", "ppl": 5, "isNE": true},
//         {"state": "Maine", "ppl": 5, "isNE": true},
//         {"state": "Vermont", "ppl": 2, "isNE": true},
//         {"state": "Massachusetts", "ppl": 2, "isNE": true},
//         {"state": "New Hampshire", "ppl": 4, "isNE": true},
//         {"state": "Pennsylvania", "ppl": 4, "isNE": false},
//         {"state": "Rhode Island", "ppl": 2, "isNE": true},
//         {"state": "Vermont", "ppl": 3, "isNE": true},
//         {"state": "New Jersey", "ppl": 5, "isNE": false},
//         {"state": "New York", "ppl": 6, "isNE": false},
//         {"state": "Montana", "ppl": 63, "isNE": false},
//         {"state": "Texas","ppl": 6, "isNE": false},
//         ];

[{state:"Vermont" ,density: }]

 //write which takes in minsqm and maxsqm --return all states which are between those ( inclusive of para)
//only if isNE true 
// mode /median /average
// const red= output.reduce((accu,next)=>accu+next.ppl,0) / output.length
// console.log(red);
// function sortandGroup (inputarr,noofGroups){
//     inputarr.sort((a,b)=> a.ppl-b.ppl)
// }

// sortandGroup(output,4)
// const sorting = 
    

  
 
//   console.log(sorting);



// function sorty (arr) {
 
//     return average
    
// }

// sorty(output)


//     function pplExtractor (incomingState) {
//         let ret = output.find(i=>i.state === incomingState)
//         console.log(ret,'ret');
//         return ret.ppl
//     }
    
//     let outp= stateSize.map(i=>{
//        let  newO= {
//            state:i.state,
//         //    density:pplExtractor(i.state)/i.sqm
//            density:pplExtractor(i.state)/i.sqm
//        }
//  return newO
//     })  

// console.log(outp,'outp');
        // let ret = [
        //     {"state": "Connecticut",density:233},
        //     {"state": "New Hampshire",density:233},
        //     {"state": "Vermont",density:233},

        // ]



 
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

        // let census2020 = [
        //     {"state": "Connecticut", "ppl": 2, "isNE": true},
        //     {"state": "Maine", "ppl": 4, "isNE": true}, 
        //     {"state": "Massachusetts", "ppl": 1, "isNE": true},
        //     {"state": "NEW", "ppl": 2, "isNE": true},
        //     {"state": "New Hampshire", "ppl": 2, "isNE": true},
        //     {"state": "New Jersey", "ppl": 1, "isNE": false},
        //     {"state": "New York", "ppl": 1, "isNE": false},
        //     {"state": "Pennsylvania", "ppl": 1, "isNE": false},
        //     {"state": "Rhode Island", "ppl": 2, "isNE": true},
        //     {"state": "Vermont", "ppl": 2, "isNE": true},
        //     ];

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

//     let str = `Write a function write akes object first argument and takes second an integar as 
//     // //    second argument, `

// const myRegex = /write/gmi
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
// let arr = [2,5]
// let newarr = arr.push(6)
// // console.log(arr.push(6));
// console.log(arr );

let a ={
    fname:"sachin",
    lname:"raj"
}

console.log(a [fname]);
console.log(a ["lname"]);
console.log(a.fname);
console.log ( a.address)
// What will be the output of a[fname] ?


// Angular - FRAMEWORK

// Opiniated 


// NON OPINIATED libray


