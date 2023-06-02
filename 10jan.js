const data = require('./Student_Data.json')
const _ = require('lodash')
// import data from './Student_Data.json'


// console.log('my code');

// const hello = "hello" ;

// const customerName = "Sachin"


// console.log("Hello " + customerName + " Welcome back" )

// console.log(`Hello ${customerName} Welcome back`)

// // Coersion
// // PRIMITIVE 
// let str1 = "I am string" ;
// let boo = false ;
// let num = 3 ;

// let str2= str1 //passed the value not the reference 
// str1="str1 changed"
// str2="str2 changed"

// console.log(str1,'STR1');
// console.log(str2, 'STR2');


// // NON PRIMITIVE

// let obj ={
//     firstName:"sachin",
//     age:3
// }
// obj.lastName= "rajgire"
// obj["address"]="167 winthrop"

// // console.log(obj ,'obj');

// let myarray = ["sachin",null,3,["sac"],{fname:"sachin"}]
// myarray[1]="raj" 
// myarray.push("third")

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

// // console.log(myarray);

// let initialValue = null ;

// console.log(typeof str);
// console.log(typeof boo);
// console.log(typeof num);
// console.log(typeof obj);
// console.log(typeof myarray);
// console.log(Array.isArray(myarray))
// console.log(Array.isArray(obj))

//


// truthy and falsy

// === and ==

//  6 Typeof falsy values


// Print  1 to 10
// 

// Need a variable to keep a total 
//Iterate and add to variable 
// End when done 
// Return the variable

//

// function A (str) {

// // refactor this code to use while loop 

//  for (let i = str.length; i >= 0; i--) {
//     console.log(str[i]);
//   }
// return sum
// }

// console.log(A ("Bootcamp"))
// function A (str) {
// // refactor this code to use while loop 
// let i = str.length
// while (i >= 0) {
//     console.log(str[i]);
//     i--
// }
// }

// console.log(A ("Bootcamp"))

// STRING Methods
// let str= "Bootcamp"
// let changedStr= str.slice(2,5)
// console.log(changedStr);

// str.substring()
// FIZZBUZZ 
// 1 to 100 

// if number is divisibke by 3 - FIZZ 
// if number is divisibke by 5 - BUZZ 
// if number is divisibke by 3 and 5 - FIZZBUZZ 

// What it returns 
// does it mutate origal , 
// arguments 
// Is there negative 
// let arr= [2,3,4]
// let newArr= arr.push (9)
// console.log(arr);

// console.log(newArr);

// exec, test, match, search , includes



// I want to end the string at letter t. 
// Find the first instance of the letter “t” and 
// delete the string after that part. For example,
//  bootcamp you will have to return the boot.

// function boot (str,char) {
// let firstIndex= str.search (char)
// console.log(firstIndex);
// let ret = str.slice(firstIndex+1)
// console.log(ret,'ret');

// }
// boot("bootcamp","t")


// function lottery (x) {
//     let x = 3
//     let firstStep = x -Date.now()
//     let secondStep= Math.abs (firstStep)
//  // keep first 3 digits and discard the rest 
//  // power of 3 to the number u get
//  // Separat each number individually and you will calculate minimum and maximum
//  // Finally divide small number by large number, multiply it by today's date( epoch), round it off to near integer, and return it

// }

// console.log(data ,'data');

// console.log(data.length);
// let slicedData= data.slice(0,3)[0]
// console.log(slicedData,"XXXX-ORIGNAL DATA" );

// auth:true,

// console.log(slicedData[0]);
// console.log(Object.entries(slicedData[0]))
// console.log(Object.keys(slicedData[0]))
// console.log(Object.values(slicedData[0]))
// const myobj = {
//     name:"first",
//     last:"raj"
// }

// const spreaded= {...slicedData,...myobj}
  
//Rest and Spread 
//Watch that video, PRACTICE / PRACTICE 

// Combine key and value

// console.log(spreaded,"XXXX-SPREADED DATA");
// const slicedData = {...data[0],...data[1]}
// // console.log(slicedData);

// const {Job_Title:jobTitle,Career_Url:careerUrl} = slicedData
// // console.log(jobTitle,careerUrl,'jobtitle');

// //map , filter , reduce, find , includes 
// const a = {firstName:'sachin'} ;
// a.lname = 'raj'

// console.log(a);

//Anonymous function
//Block Scoped 
// const res = (arg1,arg2) => {
//     return arg1 * arg2
// }

//Anonymous function
// // // const res = () => 4
// // {isEmployed:true}

// // // console.log(res(4,5));
// // let myobj= {auth:true} //
// // data.push(myobj)
// // // console.log(data[data.length-1]);

// // let myMap=["ishaan","sachin" ,"ihafuga"]

// // let storedMap= myMap.map((i,idx,arr)=>{
// // //must return something 
// // // console.log(i,idx,arr);
// // if(i.startsWith("i")){
// //     return `${i}10`
// // }
// // return i 

// // })

// // // console.log(storedMap,'st');


// // // let newData = data.map(i => {
// // //     // return {...i,isEmployed:true} //Another Solution
// // //     i.isEmployed=true;
// // //     return i
    
// // // })
// // // // console.log(newData, 'newData');


// // // let o = {
// // //     f:"sac",
// // //     s:"ac"
// // // }
// // // console.log(o["idontexist"]);
// // // console.log(o["s"]);

// // // !isValid
// // // Using


// // function addField  (field) {

// //   let storedData= data.map(i=>{
// //       if(i.University_Name ===undefined) {
// //           return i 
// //       }

// //       if(i.University_Name.includes(field)){
// //           i.isStudent=true;
// //           return i 
// //         }

// //     i.isStudent=false;
// //         return i


// //     })
// //     // console.log(storedData.slice(0,5),'storedData');

// // // return storedData.slice (0,5)
// // }

// // // addField("Carolina")

// // //Write a function - create structure 
// // // Filter records ( Inversion ) 
// // // For first task - we will only search University


// // // let filtereddata= data.filter(i=>i.Graduation_Year > 2020)

// //     //object comes in for processing
// //     // write logic ( true or false)

// // // return i.Graduation_Year > 2020 ? true :false
// // //Main thing --It has to be consistent

// // // console.log(filtereddata.length ,'filteredData');


// // //Second Task - You need to search all the field 
// // // Object.values [].join.includes

// // // Output
// // // Return an object {removed_records:[ ] ,
// // // remaining records:[ ] , 
// // // original records: [ ],records_changed:2 }


// // function sac (searchString) {

// // const myData= data.filter(i=>{
// //    let mergedFields =  Object.values(i).join()
// // //    console.log( mergedFields);
// //     if(mergedFields.toLowerCase().includes(searchString)){
// //         return true
// //     }
// // })

// // const finalValue = searchString.length ;
// // const returnObj = {
// //     filteredResults:`total filtered results were ${myData.length}`,
// //     removedRecords:data.length-myData.length,
// //     originalRecords:data.length,
// //     finalValue:finalValue
// // }
// // return returnObj
// // }
// // // console.log(sac("3455"))


// // // objectv.value and iterate over array 

// // // Iterate the array and get all values in single array
// // // Do a sum of that array and get all values

// // // reduce 

// // //3456033

// // // TASK 2- Would like to add only unique numberss



// // function abc () {
// // let count =0 
// // data.forEach((i)=>{
// // count = count + i.Graduation_Year
// // })

// // // {
// // //     key0:3,
// // //     key1:5
// // // }
// // let test = [3,5,6,5,200]
// // let reduced= test.reduce((accu, next ,idx)=>{
// // // console.log(accu,next,idx);
// // console.log(accu[`key${idx}`]=next);
// // return accu[`key${idx}`]=next
// // // <---what u return it baccome accu 
// // },{})


// // // let reduced= test.reduce((accu, next)=>accu.concat(next-1),{})


// // console.log(reduced,'reduced');

// // // for ( let i= 0;i< data.length ;i++) {
// // //     count = count + data[i].Graduation_Year
// // // }

// // // return count

// // }
// // // console.log(abc() )
// // abc()


// //First task is sum the graduation year using reduce
// // Sum it up using unique 

// // pop, push, find, trim, - Get to all other methods
// // find

// // 
// let census2020 = [
//     {"state": "Connecticut", "ppl": 3605944, "isNE": true},
//     {"state": "Maine", "ppl": 1362359, "isNE": true},
//     {"state": "Massachusetts", "ppl": 7029917, "isNE": true},
//     {"state": "New Hampshire", "ppl": 1377529, "isNE": true},
//     {"state": "New Jersey", "ppl": 9288994, "isNE": false},
//     {"state": "New York", "ppl": 20201249, "isNE": false},
//     {"state": "Pennsylvania", "ppl": 13002700, "isNE": false},
//     {"state": "Rhode Island", "ppl": 1097379, "isNE": true},
//     {"state": "Vermont", "ppl": 643077, "isNE": true},
//     ];
//      let stateSize = [
//     {"state": "Vermont", "sqm": 9623},
//     {"state": "Vermont", "sqm": 11111},
//     {"state": "New York", "sqm": 54556},
//     {"state": "Connecticut", "sqm": 5543},
//     {"state": "Pennsylvania", "sqm": 46055},
//     {"state": "New Jersey", "sqm": 8729},
//     {"state": "Massachusetts", "sqm": 10565},
//     {"state": "New Hampshire", "sqm": 9350},
//     {"state": "Maine", "sqm": 35385},
//     {"state": "Rhode Island", "sqm": 1214},
//     ];
    
//     console.log(stateSize.find((item) =>item.state === "Vermont"));
//     console.log(stateSize.filter((item) =>item.state === "Vermont"));

//     let expectedOutput=  [
//         {"state": "Vermont", "density": 354},
//         {"state": "New York", "density": 354},
//         {"state": "Connecticut", "density": 354},
//         {"state": "Pennsylvania", "density": 354},
//         {"state": "New Jersey", "density": 354},
//         ];

//  function getSqm(incomingstateName) {
//     //  console.log(incomingstateName);
//             let st= stateSize.find(item=> {
//                return item.state === incomingstateName
//             })
//             // console.log(st,'st');
//             return st.sqm
//         }

// let op = census2020.map(i=>{

// storedDensities.push(density)
//   return  {
//     state:i.state, 
//     density:i.ppl/getSqm(i.state),
// }
// })

// // mean median mode 
// // sum of all densities of all states / number states
// console.log(op);


// let stateSizeNew = [
//     {"state": "Vermont", "sqm": 9623},
//     {"state": "Vermont", "sqm": 11111},
//     {"state": "New York", "sqm": 54556},
//     {"state": "Connecticut", "sqm": 5543},
//     {"state": "Pennsylvania", "sqm": 46055},
//     {"state": "New Jersey", "sqm": 8729},
//     {"state": "Massachusetts", "sqm": 10565},
//     {"state": "New Hampshire", "sqm": 9350},
//     {"state": "Maine", "sqm": 35385},
//     {"state": "Rhode Island", "sqm": 1214},
//     ];

//   const obj1 = {
//       2020:40,
//       2021:30,
//   }  

//   const obj2 = {
//       2020:40,
//       2021:31,
//   }  

//   function isEqual (obj1,obj2) {
//     return false
//   }

// Information retrievel - fast
// Two objects are considered equal if 
// they have same key and value;
// Different arrays and objects

// let myArr = [4,7,8,91,494]
// myArr.unshift('sachi')
// console.log(myArr);
// push and pop 
// shift and unshift
// reindex

 //Finish 2 problems from today

// Read about Shallow and Deep Compare in objects

// Recursion and solve Factorial Problem using Recursion

// Watch Regex Video and Come - Regex 101

// 

// var array = [1, 2, 3, 4];
// var evens = _.remove(array, function(n) {
//   return n % 2 == 0;
// });

// console.log(evens ,'events');


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

// let myCopy = {...obj11}

// myCopy.name = "Sachin Refreshed"
// myCopy.education.masters.major = "Computer Science"

// console.log(myCopy.name);
// console.log(obj11.name);
// console.log(myCopy.education.masters.major);
// console.log(obj11.education.masters.major);

// Sachin Refreshed
// Sachin
// Comuter 
// telecom


//Renaming variables after destructuring

// function getFullName(user) {
//     const { firstName:newFirstName, lastName:newFirstName } = user;
//     return `${firstName} ${lastName}`;
//   }


// function getFullName(user) {
//     const { firstName, lastName} = user;
//     return `${firstName} ${lastName}`;
//   }
  
//   console.log(getFullName({lastName:"rajgire",firstName:"sachin"}))

//Destructing directly as argument
// const obj1 ={
//     firstName:"sac",
//     lastName:"raj"
// }


// function getFullName({ firstName:newFirstName, lastName}) {
//     // const { firstName, lastName} = user;
//     // return `${newFirstName} ${lastName}`;
//   }
//   console.log(getFullName(obj1))
//   console.log(obj1);


// // Array Destructing 
// const [first , last,...remaining] = [4, 5, 10,3,4,5,5,3]

// console.log(first, last, remaining);

// //Passing Default
// function a (arg=18) {
// return arg*arg
// }
// console.log(a(20))

// // console.log(typeof null)



// // function a (arg2,arg=18,) {
// // return arg +arg2
// // }
// // console.log(a("ra","sa"))

// // let ob ={

// //     myMeth : function () {
// //         return 10
// //     }
// // }

// // console.log(ob.myMeth())



// // Javascript Prototype 
// function concatenateAll(...args) {
//     console.log(Array.isArray(args),'args');
//     return args.join('');
//   }

//   console.log(concatenateAll(3,4,5))

//   // Constructor Function

//    function Constructe (arg) {
  
//    return this.arg+1
//   }

//   let obj = {} // Object

//    const myobnew=  new Constructe(10)

//   6 ways of createing an object

// Object.create()

// //
// // syntactic sugar
// // class Myclass {


// // }
// // prototypal inheritance

// // PROMISES

// // let abc = "I am Sachin, I am Sachin, I am Sachin"
// // let replacement= "Akshay"
// // let replacing= /sachin/gi

// // //
// // let newabc= abc.replace(replacing,replacement)

// // // console.log(newabc);

// let url = "http://qa-aws01pub.mockery.com/2017/11/16/federal-reserve-2020-president-says-country-needs-more-immigration-to-save-economy.html"


// function whichCloud () {
// const myregex= /qa-(\D+)01/gi

// let resu= url.match(myregex)
// console.log(resu);
// if(resu[0].includes("gcp")){
//     return "GCP Cloud"
// }
// if(resu[0].includes("aws")){
//     return "Aws Cloud"
// }
// return 'Azure Cloud'    

// }

// console.log(whichCloud(url))
// Cleaning it 
// Ignore Symbols -- + (- Pure number 

// 1800FLOWERS- String 

let arr= ["","","ABC","DEF","GHI","JKL","MNO" ,"PQRS","TUV","WXYZ"]

// let keypadArr = 



// console.log(arr.find((i)=>i.includes("F")))
let found= arr.find((i)=>i.includes("U"))
// console.log(arr.indexOf(found))

let obj ={
    abc:2,
    def:3,
    ghi:4,
    jkl:5,
}

for (key in obj){
    if(key.includes("k")) {
        console.log(obj[key]); 
    }
}



// Helper
function  () {
    // one thing 
    // should not be any business logic
    // predicatable 
    // testable 
    // mixing the concern
}

// 1
// clean the String 
//dirty - Clean comes out 


// 2
// function (str) {
//     return right digit 
// }


main function ( input ) {
    // Cleaning funtion
    // iterate call function keypadConvertor
    // return the results 
}

// feature Flag :
// Banner Countrieds: 

function clean (dirtyString,rid) {
// removing + , ()  , !, 
// Only keep letter and digits ( Remove everything else) // Solution 1
//

    return cleanString
}

clean("didryt" ,["+","(",")","!"])

if(covidBanner ) {

// showbanner 
}

else {

// hide banner
}


// Pseducode
// Small pieces and try to solve

// main

// cleanString
// keypadConverter ( number --> digit)
// characterToNumberConverter () 


// keyPadCoverter = function (

// )



