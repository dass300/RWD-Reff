// //sort the object array in any order. : 
// let objArray = 
// [
//     {fruit : "apple", weight : 10},
//     {fruit : "Orange", weight : 17},
//     {fruit : "Banana", weight : 4},
//     {fruit : "Papaye", weight : 100},
//     {fruit : "Guava", weight : 50}
// ];

// const abc = objArray.sort((weight)=>{
//     return weight > 0 && weight < 100
// })
// const bcd = abc
//  //console.log(bcd); 
// console.log(bcd.reverse()); 

//06.remove 'flat' Object from object.
 let obj = 
 {
    name : "Michel",age:50,
    address : 
    {
         no : 80, flat :"Top Floor"
        }
}
 console.log(delete obj.address["flat"]); 
 console.log(delete obj.address["flat"]); 

// setTimeout(()=>{
//     console.log("Callback");

// },2000)

// const express = require("express")

// const app = express()


// //Api calling
// app.get("/",(req,res)=>{

//     res.write("Hello")

// })
// app.put("/",(req,res)=>{

//     res.send("Hello")

// })
// app.post("/",(req,res)=>{

//     res.send("Hello")

// })


// //server connection
// app.listen(3000,()=>{
//     console.log("Server has staretd on port 3000");
// })