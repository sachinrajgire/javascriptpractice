// Frequency Counter Pattern uses objects to collect information , This way you don't have to run 2 loops 


let a1= [2,4]
let a2= [4,10,2]

// Write a function to check if all the items in a1 are present in a2 , if yes return true else false 

function compareT () {

    return false

}

module.exports={
    compareT
}







///////////////////////////////////////////////////////////////////

function modifyArray(arr, cb) {
    // do something to arr here
    arr.push(100);
    // then execute the callback function that was passed
    cb();
  }
  
//How do I get Call this function and get the output 




///////////////////////////////////////////////////////////////////
// Given this array , Provide few ways you can empty the array 
let a= [1,4,8]



///////////////////////////////////////////////////////////////////
// Multicate 
//1st arg is array and second inter from 1 to 50. Number of items in array ( first arguyment )
// should duplicate if 2 is passed as second argyment , tripilicate if 3 is passed as second argyment


function multicate () {


}



///////////////////////////////////////////////////////////////////
// console.log(mul(2)(3)(4))
// Write a function to make this work 





///////////////////////////////////////////////////////////////////

function counter() {
    var _counter = 0;
    // return an object with several functions that allow you
    // to modify the private _counter variable
    return {
      add: function(increment) { _counter += increment; },
      retrieve: function() { return 'The counter is currently at: ' + _counter; }
    }
  }
//   What is the expected output of _counter 
  console.log(_counter,'counter');
  var c = counter();
  c.add(5);  
  c.add(9); 
  
  c.retrieve(); // //   What is the expected output of _counter 

  ///////////////////////////////////////////////////////////////////

  function foo() {
	console.log( this.bar );
}

var bar = "global";

var obj1 = {
	bar: "obj1",
	foo: foo
};

var obj2 = {
	bar: "obj2"
};

foo();		 	
obj1.foo();	    
foo.call( obj2 );  
new foo();	     



  ///////////////////////////////////////////////////////////////////
// Currently priv is not available outside function func, Modify func to make console.log work 

  function func() {
    var priv = "secret code";
    
  }
  

  var getPriv = func();
  console.log(getPriv()); // => secret code should appear 


///////////////////////////////////////////////////////////////////
https://www.hackerrank.com/work/library/hackerrank?question=801684&skill_ids=2b899851360d&view=question&copyscrape=true







  ///////////////////////////////////////////////////////////////////
