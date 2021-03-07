

// ********************************************************************
// Write a function p1 which will give this desired outcome 
// p1().then(i=>{
//    console.log(i,'i'); // 'Promise is a promise"
// })

// ********************************************************************
// Write a function p1 which will give this desired outcome in 5 seconds 
// p1().then(i=>{
//    console.log(i,'i'); // 
// })
// ********************************************************************
// Write a function p1 which will give this desired outcome in 3 seconds 
// p1().then(i=>{
//    console.log(i,'i'); 
// })
// .catch(i=>console.log(i)) 'I was caught"
// ********************************************************************
// Write a function p1 which will give this desired outcome in 3 seconds
// If input number is < 10 
// p1(2).then(i=>{
//    console.log(i,'i'); 
// })
// .catch(i=>console.log(i)) 'Number too small"

// If input number is > 10 
// p1(20).then(i=>{
//    console.log(i,'i');  2000
// })
// .catch(i=>console.log(i))
// ********************************************************************
// Write a function p1 which will give this desired outcome 
// p1(20)
// .then(r1=>p2(r1))  /////-->Always remember to return p2(r1) . this syntax is shortcut for return p2(r1)
// .then(p2res=>console.log(p2res)) ///20,000
// .catch(e=>console.log(e))


// const userDetails = new Promise((resolve, reject)=>{
    
//     setTimeout(()=>{
//         resolve({
//             name:'Sachin',
//             favoritePlaces:['222' ,'219','4']
//         })
//     },2000)
    
// })
// const userSettings = new Promise((resolve, reject)=>{
    
//     setTimeout(()=>{
//         resolve({
//             name:'Sachin',
//             settings:{
//                 isProfilePublic:false,
//                 isFriendListHidden:true
//             }
//         })
//     },4000)
    
// })

// How can you invoke both promises at the same time 
// How to invoke Promises that if atleast one of them is settled , you get result bacl 
// How can you invoke all promisees at once , make sure you get result back if one of them is rejected