// Live coding today

input_1 = {"a": 1, "b": 2, "c": 3, "d": 4, "e": 2}
input_2 = {"a": 1, "b": 2, "c": 3, "d": {"e": 1, "f": 2, "g": 3}}
input_3 = {"a": 1, "b": 2, "c": 3, "d": {"e": 1, "f": {"b": 3, "h": 2}, "g": 3}}
function findKeys(input, target_value) {
  let arr = []
  for (const [key, value] of Object.entries(input)){
    if (value === target_value){
       arr.push(key)
    }else if(typeof value === "object"){
      nested_results = findKeys(value, target_value)  // returns an array of all deeper results
      // at 'd' we have arr = ['b'], nested_results is ['f']
      arr = arr.concat(nested_results)
    //  arr = [...arr, ...nested_results]
    }
    // if value is an object itself
    // include all nested results as well 
  }
  return arr;
}
function findPath(input, target_value){
  let arr = []
  for( let key in input){
    // console.log("input is ", input, "key is ", key)
    if(input.hasOwnProperty(key)){
      if(target_value === input[key]) {
        arr.push([key])
      } else if(input[key] && typeof input[key] === "object"){
        // console.log(input[key])
        let result = findPath(input[key], target_value)
        // console.log(input[key])
        // console.log("result is ", result, "lenght is ", result.length)
        for(let i = 0; i < result.length; i++){
          // console.log(result)
         // arr.push([key].concat(result[i])) 
          arr.push([key, ...result[i]]) 
        }
        // arr = arr.concat(result) 
      }
    }
  } return arr
}
console.log(findPath(input_1, 2)) // [ ['b'], ['e'] ]
console.log(findPath(input_1, 11)) // []
console.log(findPath(input_2, 2)) // [ ['b'], ['d', 'f'] ]
console.log(findPath(input_3, 2)) // [ [ 'b' ], [ 'd', 'f', 'h' ] ]
console.log(findPath(input_3, 3)) // [ ['c'], ['d', 'f', 'b'], ['d', 'g'] ]input_1 = {"a": 1, "b": 2, "c": 3, "d": 4, "e": 2}
input_2 = {"a": 1, "b": 2, "c": 3, "d": {"e": 1, "f": 2, "g": 3}}
input_3 = {"a": 1, "b": 2, "c": 3, "d": {"e": 1, "f": {"b": 3, "h": 2}, "g": 3}}