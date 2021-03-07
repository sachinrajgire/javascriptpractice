const _ =require('lodash')
const {compareT} =require('./frequency_counter.js')
let a1= [2,4]
let a2= [4,10,2]


test('should be false when length are unequal', () => {
    let res =compareT(a1,a2)
    expect(res).toBe(false);
    let res1 =compareT(a2,a1)
    expect(res1).toBe(false);
   
  });

test('should be false when length are unequal', () => {
    let res1 =compareT(a2,a1)
    expect(res1).toBe(false);
   
  });

test('should be true', () => {
  let  a3= [2,4,10]
  let  a4= [4,10,2]
    let res1 =compareT(a3,a4)
    expect(res1).toBe(true);
   
  });

test('should be true', () => {
  console.log(a1,a2,'a1 a2');
   let a5= [2,4,10,10]
  let  a6= [4,10,2,10]
    let res1 =compareT(a5,a6)
    expect(res1).toBe(true);
   
  });

test('should be false', () => {
   let a7= [2,4,10,10,5]
   let a8= [4,10,2,10,4]
    let res1 =compareT(a7,a8)
    expect(res1).toBe(false);
   
  });
test('should be false', () => {
   let a9= [1]
   let a10= [1]
    let res1 =compareT(a9,a10)
    expect(res1).toBe(true);
   
  });

