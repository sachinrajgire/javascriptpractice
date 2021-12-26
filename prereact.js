const { SearchSource } = require('jest')
const { startsWith, indexOf, isArguments, filter } = require('lodash')
const data = require('./Student_Data.json')

// Copy the data and copyData 
let copiedData = [...data].slice(0,5)

let enrolledStudents = [
{name:"Prasoon" ,isUSCitizen:false,graduated:false,skillLevels:5,isProfileOpen:false},  
{name:"Khabib" ,isUSCitizen:false,graduated:false,skillLevels:3,isProfileOpen:true}, 
{name:"Smriti" ,isUSCitizen:false,graduated:true,skillLevels:5,isProfileOpen:false}, 
{name:"Cynthia" ,isUSCitizen:false,graduated:false,skillLevels:9,isProfileOpen:true}, 
] 
// let arr = [5,6,7,["dfd"]]

let somedata = enrolledStudents.filter((item)=>{
    let areWeAsleep= false 
    // console.log(index,'index');
    // if(item.isProfileOpen === true) {
    if(item.isProfileOpen ) {
      !areWeAsleep
    }
    return false
    
})
console.log(somedata,'somedata');
// let somedata = enrolledStudents.map((i,index)=>{
//     // console.log(index,'index');
//     if(i.isProfileOpen === true) {
//         return `${i.name} agreed to open his profile`
//     }
//     return {...i ,isProfileOpen:'I GOT CHANGED',whatever:false}
   
// map , filter , find , forEach , includes , 
// startsWith , reduce, slice, splice ,indexOf 
// })
// console.log(somedata)

// Loop thru the date and if year of graduation less 2020 and lesser than 
// 2020,2019  (use .map)-- Loop thru, iterate
// let ret = copiedData.map((item)=>{
//  if(item.Graduation_Year >2020) {
//      return {...item ,graduated:false}
//  }
//  return {...item ,graduated:true}

// })

// let a1= copiedData.map(i=>{

// })
// console.log(Boolean("sachin"));
// console.log(Boolean(["sachin"]));
// console.log(Boolean());
// console.log(Boolean(false));
// console.log(Boolean(""));

//includes
///if job title contains word - data 
// add new property called: classification : ['data'] 

///if job title contains word - software 
// add new property called: classification : ['software'] 

///if job title contains both data and software
// add new property called: classification : ['software' ,'data] 

// classification : ['noclassfound'] 




// console.log(ret ,'ret');

// map , filter , find , forEach , includes , startsWith , reduce

// Write logic to separate each entry into 2 buckets 
//Graduated and not graduated

// graduated:true 

// {
//     "University_Name": "University of Rochester",
//     "Specialization": "Computer Science",
//     "Graduation_Year": 2021,
//     "Employer": "AI Zwei",
//     "Job_Title": "Machine Learning Engineer",
//     "Job_Start_Date": "10/1/2020",
//     "Career_Url": "https://www.aizwei.com/",
//      graduated:false,
//   },

  //

  /// output look thru the url contains careers 
//   records whose career url does not contain word career

// NodeFilter
//

// Write a function --

// arg1---name of field you want to 
// arg 2 - string you want to search in arg1 field 
// if string is found return that filter

function search (fieldName, searchString) {
//



}

search("Specialization", "system" )