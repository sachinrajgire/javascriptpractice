// Circular Printer 
// https://drive.google.com/file/d/1AF1i0PRcA74QCBoarrzL4LyQKNz7t2-4/view?usp=sharing

//  Programming Contest 
// https://drive.google.com/file/d/1RWNatilh0fqeywyB7iKZFTGr8r8kDCce/view?usp=sharing

// ZIG - ZAG 
// https://drive.google.com/file/d/1ormybUNR-pQlSMQi4weUbU3yv2w9emHI/view?usp=sharing

//Ad Rotation
// https://drive.google.com/file/d/1eHINL86P8UeI5i0dd62cO-CQ9F-aL9VX/view?usp=sharing

// got a live question on a technical today to return the " desnsity of each state" (population / square milage) from this info: 

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
//     {"state": "New York", "sqm": 54556},
//     {"state": "Connecticut", "sqm": 5543},
//     {"state": "Pennsylvania", "sqm": 46055},
//     {"state": "New Jersey", "sqm": 8729},
//     {"state": "Massachusetts", "sqm": 10565},
//     {"state": "New Hampshire", "sqm": 9350},
//     {"state": "Maine", "sqm": 35385},
//     {"state": "Rhode Island", "sqm": 1214},
//     ];

// const { socialtoolsEnabled=true } = article || {};





function Bootcamp(startDate,endDate,title,students) {
this.startDate= startDate;
this.endDate= endDate;
this.title = title;
this.students= students;

this.duration= function() {
    return endDate -startDate
   }   //Methods 
}


const may24 = new Bootcamp(10,20,"react",10)

console.log(may24,'may24');
console.log(may24.duration(),'duration');