const { floor, ceil } = require('lodash');
const _ =require('lodash')
const {compareT,sumZero} =require('./frequency_counter.js')
// let a1= [2,4]
// let a2= [4,10,2]


// test('should be false when length are unequal', () => {
//     let res =compareT(a1,a2)
//     expect(res).toBe(false);

//     let res1 =compareT(a2,a1)
//     expect(res1).toBe(false);
   
//   });

// test('should be false when length are unequal', () => {
//     let res1 =compareT(a2,a1)
//     expect(res1).toBe(false);
   
//   });

// test('should be true', () => {
//   let  a3= [2,4,10]
//   let  a4= [4,10,2]
//     let res1 =compareT(a3,a4)
//     expect(res1).toBe(true);
   
//   });

// test('should be true', () => {
//   console.log(a1,a2,'a1 a2');
//    let a5= [2,4,10,10]
//   let  a6= [4,10,2,10]
//     let res1 =compareT(a5,a6)
//     expect(res1).toBe(true);
   
//   });

// test('should be false', () => {
//    let a7= [2,4,10,10,5]
//    let a8= [4,10,2,10,4]
//     let res1 =compareT(a7,a8)
//     expect(res1).toBe(false);
   
//   });
// test('should be false', () => {
//    let a9= [1]
//    let a10= [1]
//     let res1 =compareT(a9,a10)
//     expect(res1).toBe(true);
   
//   });

//Input Sorted Array of Integers ( Input )
//Expected Output : Array with 2 integers ( these 2 integors should sum to zero)
// First available 
// [-3,-1,0,4,5]  -->[-1,-1]
// [-3,-1,0,3,4]  -->[0,3]

test('should be false when length are unequal', () => {
  let input = [-3,-1,0,4,5]
    let res =sumZero(input)
    expect(res).toStrictEqual([-1,-1]);
  });

test('should be false when length are unequal', () => {
  let input = [-3,-1,0,3,4]
    let res =sumZero(input)
    expect(res).toStrictEqual([0,3]);
  });

test('should be false when length are unequal', () => {
  let input = [-3,-2,-1]
    let res =sumZero(input)
    expect(res).toStrictEqual([-1,-1]);
  });

test('should be false when length are unequal', () => {
  let input = [-3,3]
    let res =sumZero(input)
    expect(res).toStrictEqual([0,1]);
  });

test('should be false when length are unequal', () => {
  let input = [-10000000,0,10000000]
    let res =sumZero(input)
    expect(res).toStrictEqual([0,2]);
  });

test('when negative floats are entering, it should still work', () => {
  let input = [-0.222222,0,0.222222]
    let res =sumZero(input)
    expect(res).toStrictEqual([0,1]);
  });



  // console.log(Number.MIN_VALUE,Number.MAX_VALUE);
// console.log(Number.MIN_VALUE===Number.MAX_VALUE);

// test('should be false when length are unequal', () => {
//   let input = []
//     let res =sumZero(input)
//     expect(res).toStrictEqual([-1,-1]);
//   });

//   outerArg = 7
// outerFuncVar = x
// innerArg = 5
// innerFuncVar = y
// globalVar = abc

///////////////////////////////////////////////////////////////////
// Two Pointer Pattern
// function sumZero(arr) {
//   let left =0
//  let right =arr.length-1
  
//  while(left < right ){
//  let sum =arr[left]+ arr[right]
//  if(sum===0){
//   return [arr[left],arr[right]]
//  }
//  else if (sum >0 ){
//   right --
//   }
//   else {
//     left++
//   }
  
//  }
///////////////////////////////////////////////////////////////////
  
    // Sliding Window Pattern
    //Given input array as first argument and number of elements as second argument
    //find maximum sum posssible for adjacent elements 
  //   function a(x,y){
 
  //     let tempSum=0
  //     let maxSum=0
   
  //  for(i=0;i<y;i++){
  //  tempSum=tempSum+x[i]
  //  // console.log(tempSum);
  //  }
  //  maxSum=tempSum
  //  for(j=0;j<x.length-y;j++){
  //  // console.log(x[j],x[j+y]);
  //  tempSum=tempSum-x[j]+x[j+y]
  //  maxSum=Math.max(tempSum,maxSum)
  //  }
   
  //  return maxSum
  //    }
  //  console.log(a([1,20,3,3,4,5,5,5,50],2))

///////////////////////////////////////////////////////////////////
// BINARY SEARCH
//   function a(x,y){
 
//     var min=0
//     var  max=x.length-1 ;
//     while(min<=max){
//         let mid=Math.floor((min+max)/2)
//         // console.log(mid);
       
//         if(x[mid]>y){
//          max=mid-1 ;
//         }
//         else if(x[mid]<y){
//          min=mid+1 ;
//         }
 
//     else {
//         return mid
//     }
 
//         }
 
//         return -1
 
//    }
//  console.log(a([1,2,3,5,6,8,10,15,25,30],11))

