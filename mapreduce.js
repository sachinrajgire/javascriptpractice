const { forEach, map, includes } = require('lodash');
const data = require('./Student_Data.json')

let slicedData= data.slice(0,5)
// console.log(slicedData);

let obj = {
    name:"sachin",
    // pastStudent:true
}

obj.pastStudent = true
obj['pastStudent'] = true

console.log(obj,'obj');
let a = slicedData.map((item,idx)=>{
//how to get total number of keys
// map 
// key is array 
})
//0- nochange
// even index-- iameven:true
// odd : iameven:false

console.log(a,'AA');
// for in
//only for University name contains Carolina

// Q1
// case insensitive
//loop over data
// find the key in any of values
// Once I find the key
function findKey ("science") {
keywordExist:true;
}

findKey("software")

Q2
//loop over data
// Career_Url <---/wynisco
// url is empty or does not exist leave it alone

Q3 ( filter)
//loop over data
// Filter graduation date is less than 2020
// Only objects who has graduation date 2020 and less


// map, filter, reduce, for Each, slice ,splice, push,includes

