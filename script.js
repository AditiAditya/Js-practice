////////////// ***********PROMISE**************** /////////////////////STARTS 

// let promise = new Promise((resolve, reject) => {
//   alert("this is promise")
// })

// console.log("hello world")
// setTimeout(function(){
//      console.log("print after  4 sec")
// }, 400 );

// console.log("har dil main basti hu main heroine hu ")
// console.log(promise)

// let p = new Promise((resolve, reject) => {
//   console.log("promise is pending ")
//   setTimeout(() =>{

//      resolve(true)
//   },3000)
// })



// let p1 = new Promise((resolve, reject) => {
//   console.log("promise is pending ")
//   setTimeout(() =>{
//     //  console.log("hey everyone your work is fulfill now ")
//      reject(new Error("i am an error"))
//   },3000)
// })
// console.log(p , p1)

// p.then((value) => {
//   console.log(value)
// })

// p1.catch((error) =>{
//   console.log("some error occures in p1 ")

// })


let p = new Promise((resolve, reject) => {
  setTimeout(()=>{
    console.log("your are successfully")
    resolve(36)
  },2000)
})

p.then((value)=>{
  console.log(value)
  let p2 = new Promise((resolve, reject) => {
    console.log("2 promise")
    resolve(34)
  })
}).then((value) => {
  console.log("we are done ")
})