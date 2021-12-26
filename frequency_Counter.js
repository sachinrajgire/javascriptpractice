// Frequency Counter Pattern uses objects to collect information , This way you don't have to run 2 loops 

// PROBLEM 1
// let a1= [2,4,10,4]
// let a2= [4,10,4,2]

// // Write a function to check if all the items in a1 are present in a2 , if yes return true else false 
a1temp = {
  "4":2,
  "2":1,
  "10":1
}
function compareT(a1,a2) {
let ret = true 
    if(a1.length !== a2.length) {
        ret= false 
    }
  let a1fq ={}

   a1.forEach(i=>{
       if(a1fq[i] ===undefined){
           a1fq[i]=1
       }
       else {
        a1fq[i]= a1fq[i]+1
       }
   })
   
   console.log(a1fq,'a1fq');
  let a2fq ={}

   a2.forEach(i=>{
       if(a2fq[i] ===undefined){
        a2fq[i]=1
       }
       else {
        a2fq[i]= a2fq[i]+1
       }
   })
   console.log(a2fq,'a2fq');

for (let key in a2fq) {
   let v= a2fq[key]
   if(a1fq[key] !== v) {
    ret =false 
    break
 }
}

    return ret
}



function sumZero(arr) {
  let i = 0;
  let j = arr.length-1;
  while (i<j) {
    if (arr[i]+arr[j]==0) {
      return [i,j]
    }
    else if (arr[i]+arr[j]<0) {
      i++;
    }
    else {
      j--;
    }
  }
  return [-1,-1]
}

module.exports ={
  compareT,
  sumZero,
}

// console.log(compareT(a1,a2) ,'RETURNED VALUE ' )



///////////////////////////////////////////////////////////////////

// function modifyArray(arr, cb) {
//     // do something to arr here
//     try {
       
//     throw new Error('Whoops!')
//     }
//     catch (e){
//         console.log('catch blockin voked ');
//         cb(e)
//     }
//   }
  
// modifyArray([2,3],(data,error) =>{
// console.log(data,'data XXX');
// console.log(error,'error XXXX');
// })
//How do I get Call this function and get the output 
///////////////////////////////////////////////////////////////////

// Binary Search - Given the sorted array ( first argument), Find the element using binary search
// Return -1 when nothing is found .

// function a(x,y){

// let min 
// let max =x.length - 1 

// while () {

//  let mid  = Math.floor(x[x.length /2] )
  
// console.log(mid ,'mid');
// }
 
// }
//  console.log(a([1,2,3,5,6,8,10,15,25,30],11))


///////////////////////////////////////////////////////////////////
// Given this array , Provide few ways you can empty the array 
// let a= [1,4,8]



///////////////////////////////////////////////////////////////////
// Multicate 
//1st arg is array and second inte from 1 to 50. Number of items in array ( first arguyment )
// should duplicate if 2 is passed as second argyment , tripilicate if 3 is passed as second argyment


// function multicate () {


// }

// console.log(multicate([1,2,3],));

///////////////////////////////////////////////////////////////////
// Write a function to make this work 
// function mul (x) {
//   console.log(x,y,'XY OUTER ');
//   return function (y) {
//     console.log(x,y,'XY MIDDEL ');
//     return function (z) {
//       console.log(x,y,z,'XY LOWER');
//         return x*y*z
//     }
//   }
// }

// // function mul (x) {
// //   function abc (y) {
// //    function xyz (z) {
// //       // console.log(x,y,z,'XY LOWER');
// //         return x*y*z
// //     }
// //   }
// // }
// console.log(mul(2)(3)(4))




///////////////////////////////////////////////////////////////////

// function counter() {
//     var _counter = 0;
//     // return an object with several functions that allow you
//     // to modify the private _counter variable
//     return {
//       add: function(increment) { _counter += increment; },
//       retrieve: function() { return 'The counter is currently at: ' + _counter; }
//     }
//   }
// //   What is the expected output of _counter 
//   console.log(_counter,'counter');
//   var c = counter();
//   c.add(5);  
//   c.add(9); 
  
//   c.retrieve(); // //   What is the expected output of _counter 

//   ///////////////////////////////////////////////////////////////////

//   function foo() {
// 	console.log( this.bar );
// }

// var bar = "global";

// var obj1 = {
// 	bar: "obj1",
// 	foo: foo
// };

// var obj2 = {
// 	bar: "obj2"
// };

// foo();		 	
// obj1.foo();	    
// foo.call( obj2 );  
// new foo();	     



  ///////////////////////////////////////////////////////////////////
// Currently priv is not available outside function func, Modify func to make console.log work 

//   function func() {
//     var priv = "secret code";
    
//   }
  

//   var getPriv = func();
//   console.log(getPriv()); // => secret code should appear 


///////////////////////////////////////////////////////////////////
// What will console.log Print 
// var globalVar = "abc";

// // Parent self invoking function
// (function outerFunction (outerArg) { // begin of scope outerFunction
//   // Variable declared in outerFunction function scope
//   var outerFuncVar = 'x';    
//   // Closure self-invoking function
//   (function innerFunction (innerArg) { // begin of scope innerFunction
//     // variable declared in innerFunction function scope
//     var innerFuncVar = "y";
//     console.log(         
//       "outerArg = " + outerArg + "\n" +
//       "outerFuncVar = " + outerFuncVar + "\n" +
//       "innerArg = " + innerArg + "\n" +
//       "innerFuncVar = " + innerFuncVar + "\n" +
//       "globalVar = " + globalVar);
//   // end of scope innerFunction
//   })(5); // Pass 5 as parameter
// // end of scope outerFunction
// })(7); // Pass 7 as parameter

// // Solution in test file 



//   ///////////////////////////////////////////////////////////////////
// //   NODE Quetions - Which of these willl processed first and which will be last 
//   process.setTick(()=>{})  
//   setImmediate(()=>{}) 
//   setTimeout 

    ///////////////////////////////////////////////////////////////////
    // A unique character is one which appears only once in a string. Given a string consisting of lowercase English letters only, return the index of the first occurrence of a unique character in the string using 1-based indexing. If the string does not contain any unique character, return -1.
    // Example
    // s = "statistics" 
    // The unique characters are [a, c] among which a occurs first. Using 1-based indexing, it is at index 3.


 ///////////////////////////////////////////////////////////////////
//  Given a function sumZero which sorted array as input find two number that sum to zero 
//start with pointers left to right , if none of two number sum to zero , return false

//  function sumZero(arr) {
   
    
// }
    
//    // console.log(addUpTo(1000000000000),'bad add')
//    console.log(sumZero([-9,-8,-4,-2,-1,0,1,2,3,6,7,10]))

///////////////////////////////////////////////////////////////////
    //    Sliding Window Pattern
    // Given input array as first argument and number of elements as second argument
    // find maximum sum posssible for adjacent elements 
// function a(x,y){

//     let finalTotal =0
// console.log(i);
//     // while(xy.length-1 !== x.length)
//     for ( let i=0; i<y ;i++) {
//       // total+=x[i]
//       // if(total > finalTotal){
//       //     finalTotal=total
//       // }
//  console.log(i);
//     // }

//    }
//  console.log(a([1,2,3,3,4,5,5,5,6],4)) 
//  console.log(a([1,2,3,3,4,5,5,5,6],2))
//  console.log(a([1,2,3,3,4,5,5,5,6],1))
//  console.log(a([1,2,3,3,4,5,5,5,6],4))
//  console.log(a([1,2,3,3,4,5,5,5,6],4))

//  Write cases 
//  Enter input -- 
//  Expected Input 
//  Log on error with frond end team that its not 
//  Open a bug

///////////////////////////////////////////////////////////////////
// function a () {

//   console.log(i,'i outside');
//   for ( var i=0; i<5 ;++i) {
//     console.log(i);
//   }
//   console.log(i,'below');


// }
// a()
// let var1 = 5, var2 = 5;

// // 5 is displayed
// // Then, var1 is increased to 6
// console.log(var1++)

// // var2 is increased to 6
// // Then, var2 is displayed
// console.log(++var2)

///////////////////////////////////////////////////////////////////

//  Populate Alphabets A to Z in array 
// const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));



// let test = "somestring"

// let arr = ["d", "8ere","dfdcdfdf"]

// console.log(test.includes("some"))
// console.log(test.includes(""))
// console.log(arr.includes("8ere"))
// console.log(arr.includes(""))


// const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 97));

// console.log(caps,'caps');

