
// let z = {
//     fname:"fname",
//     last:"last"
// }
const fname = "sachin"
const last = "Rajgire"
let z = {
    fname,
    last
}

console.log(z.fname);


// const data = require ('./Student_Data.json') 

// let copyData= [...data]
// //Write a function that take string , programs search key in University_Name
// //filter data where university name contains Maryland name
// // case insensitive 


// // let avg = copyData
// // .slice(0,3)
// // .reduce((accu,next)=>{
// //  return accu + next.Graduation_Year
// // },0)
// // console.log(avg,'avg');
// // let abc= ['sach', 'utah' ,'mary','virgina']
// let abc= [1,2,3,4,5]

// let avg= abc
// // .slice(0,4)
// .reduce((accu,next)=>{
    
//  return accu[0] +next
// },0)



// let output1 = {
//     2020:60,
//     2017:1,
//     2022:1,
//     2021:1
// }
// let output2 = {
//     2020:6,
//     2017:1,
//     2022:1,
//     2021:1
// }

// let res = {}
// for ( let key in output2){
// res[key]=output2[key]+output1[key]
// }

// console.log(res,'res');

// let finalRes = {
   
// }

// copyData.forEach((i)=>{
//     const {Graduation_Year} = i
//    if(!finalRes[Graduation_Year]){
//       finalRes[Graduation_Year]=1
//    }
//    else {
//     finalRes[Graduation_Year]=finalRes[Graduation_Year]+1
//    }
// })
// // console.log(finalRes,'finalRes');





// //only search in University_Name 
// // let filtered = copyData.slice(0,3)
// // .map((item,idx,current)=>{
// // // Code to combine all value
// // console.log(item,idx,'item,idx,current')

// // })

// //map over all the data if careerl_url is valid
// // as new property called isCareerUrlValid:true or false
// // filter all invalid urls 


    


// // let arr= [1, 2,4 ]
// // // console.log(arr.join("_"));
// // let str= "124abcddee"
// // console.log(str.split(""))



// // let newData = copyData
// // .slice(0,2)
// // .map((i)=>{
// //     const { Job_Title:jobTitle,Graduation_Year,Employer } = i
// // // console.log(jobTitle,'Job_Title');
// // // console.log(Object.values(i));
// // let combinedValues= Object.values(i)
// // .join("")
// // .toLowerCase()
// // .includes("software")
// // // console.log(combinedValues,'combinedValues');

// // })
// // let index= copyData.length - 1
// // copyData.splice(index,0,{})
// // console.log(copyData,'copyData');

// // console.log(newData,'newData');




// // let myName='Sachin'
// // console.log(myName);
// // let arr1= ['34',"56"]
// // console.log(arr1);


// // const  obj1 = {
// //     fname:'Sachin',
// //     lname:"rajgire",
// //     education :{
// //         masters:{
// //             major:"Telecom",
// //             minor:"Management"
// //         }
// //     },
// //     fullName: function () { return this.fname + this.lname}
// //  }

// //  console.log(obj1.fullName)



// //  Prototypical inheritance 
// //  this keyword 
// //  call apply and bind


// //  const schoolName= "UMD"
// //  schoolName = "new UMD"

// //  obj1.address="233 spring street"
// //  console.log(obj1);
// //  obj1.address="address changed"
// //  console.log(obj1);

// // obj1= {
// //     test:"sachin"
// // }


// //function declaration
// // function a () {
// //     return 'c'
// // }
// // //function declaration ( Anonymous)
// // let z= function () {
// //     return 'z'
// // }

// //function expression
// // const e = () =>{
// //     return 'e'
// // }
// // const e = (arg1=20,arg2=10 ) => {
// //    console.log(arg1,arg2);
// //     return arg1+arg2
// // }  
// // console.log(e());
// // console.log(a());
// // console.log(e());

// // console.log(typeof obj1);
// // console.log(typeof arr1);
// // console.log(Array.isArray(obj1));





// // let  currentAppState ={
// //     name:'POP UPs',
// //     popups :{
// //         emailCapturePop:{
// //             fullscreenpopup:false,
// //             sidePopup:false,
// //             cookiesAccepted :true,
// //             newUserAccepted:true,
// //         }
// //     }
// //  }





// //  let str = JSON.stringify(obj1,'STRINGIFIED')
// //  console.log(str,'STR')
// //  let parsedStr= JSON.parse(str)
// //  console.log(parsedStr,'parsedStr')

// //  let  obj2 = {...obj1}
// //  console.log(obj1 === parsedStr);
// //  console.log(obj1 === obj2);
// // //  data type
// // //  typescript ( Strict type checking build into )
 
// //  obj2.name="New and Improved Sachin"

// // //  console.log(obj2.name," I am printing Obj2 here <----")
// // //  console.log(obj1.name," I am printing Obj1 here <----")
 
// //  obj2.education.masters.major="Computer Science"
 
// // //  console.log(obj2.education," OBJ2.EDUCATION")
// // //  console.log(obj1.education," OBJ1.EDUCATION")
// //  //Pass by value
// //  //Pass by reference 

// // // redux 