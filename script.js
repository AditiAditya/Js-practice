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


// let p = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     console.log("your are successfully")
//     resolve(36)
//   },2000)
// })

// p.then((value)=>{
//   console.log(value)
//   let p2 = new Promise((resolve, reject) => {
//     console.log("2 promise")
//     resolve(34)
//   })
// }).then((value) => {
//   console.log("we are done ")
// })

//////////////////////////////////////   25 05  ///////////////////////////////////////////////////
// let p = new Promise((resolve, reject) => {
//        setTimeout(()=>{
//         console.log("resolve after 2 sec ")
//         resolve( 23)
//        }, 2000)
// })

// p.then((value)=>{
// console.log(value)
// return new Promise((resolve, reject) => {
//   setTimeout(()=>{  resolve("promise 2")})

  
// })
// }).then((value)=>{
//   console.log("we aer done")
//   return 2
// }).then(()=>{
//   console.log ("final done ")
// })


// const loadScript = (src)=>{
//   return new Promise((resolve, reject) => {
    

// let script = document.createElement("script")
// script.type= "text/javascript"
// script.src = src
// document.body.appendChild(script)
// script.onload = () =>{
// resolve(1)
// }
// script.onerror = 
// })
// }

// let p = new Promise((resolve, reject) => {
//   alert("hey buddy ")
//   setTimeout(()=>{
//     resolve(22)
//   })
// }, 4000)

// p.then(()=>{
//   console.log("hey this wooorks")
// })

// p.then(()=>{
// console.log ("its done")
// })
// /////////////////////////////////////////////////////////////////////SOLVED//////////////////////////////////////
// let p = new Promise((resolve, reject) => {
  
//   setTimeout(()=>{
//     resolve("value 1")
//   },1000)
// })

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     resolve("value 2")
//   },2000)
// })

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     resolve("value 3")
//   },4000)
// })

// // p.then((value)=>{
// //   console.log(value)
// // })

// // p1.then((value)=>{
// //   console.log(value)
// // })


// // p2.then((value)=>{
// //   console.log(value)
// // })

// let promise_all=Promise.all([p,p1,p2])
// promise_all.then((value)=>{
//   console.log(value)
// })  


/////////////////////////////////////  "AWAIT"//////// "this function is not working /////////////////////
// async function aditi () {let bhopalweather = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     alert("45 degree celcius")
//   },2000)
// })

// let uttrakhandweather = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     alert("5 degree celcius")
//   },6000)
// })

// // bhopalweather.then(alert)
// // uttrakhandweather.then(alert)
// console.log("very hot  weather of bhopal")
// let bho = await bhopalweather
// console.log("very hot  weather of bhopal : " + bho)



// console.log("feteching weather of uttrakhand")
// let utt = await uttrakhandweather
// console.log("very hot  weather of uttrakhand  :" + utt)
// return[bho , utt]
// }

// // console.log("thankyou")
// let s =aditi()
// s.then((value)=>{
//   console.log(value)
// })

//////////////////////////////        error handling   ////////////////////////////////////////////////////////


// setTimeout(() => {
//     console.log("i am hacking u ...........")
// }, 1000);

// try{
//     console.log (ritik)
// }

// catch(error){
// console.log("balle balle")
// }

// setTimeout(() => {
//     console.log("u are hacked \'aditya \'.....")
// }, 3000);

// setTimeout(() => {
//     console.log("Now give me your account no ")
// }, 5000);


// setTimeout(() => {
//     console.log("i cradit all your money")
// }, 6000);

// try {
//     let age = prompt("entre your age !!")
//     age = Number.parseInt(age)
//     if(age>100){
//   throw new ReferenceError("your are so luckey")

//     }

//     else{
//         console.log("pretty young u are")
//     }
//     console.log(aditi)
//    throw new ReferenceError("aditi is very rich")
// } catch (error) {
// console.log(error . name)
// console.log(error.message)
// }

// console.log("running")

// const p=   ()=>  {
// try {
//     let a = 23
    
//     console.log("chal rha h code ")
// return

// } catch (error) {
//     console.log("nhi chal rha h code")
// }

// finally{
//     console.log ("chalna he chalna h issko ")
// }

// }

// p()

// console.log("aur sab badhiya")

// let age= prompt("what is your age ???")
// age = Number.parseInt(age)
// let runagain = true;


// const Cardrive=(age)=>{
// return age>=18?true:false
// }


// while (runagain) {
//     let age= prompt("what is your age ???")
// age = Number.parseInt(age)
// if (age<0){
//     console.error("pls enter valid age ")
//     break
// }

// if(Cardrive(age)){
//     alert("yes u can drive >>>>.")
// }
// else{
//     alert("you cant drive ")
// }
// runagain = confirm("do u want to see again")
// }


/////////////////////////////  theym are just loop   ////////////////////////////
// let  sum =0
// let a = prompt("value de ")
// a= Number.parseInt(a)


// for( let i=0; i<a; i++ ){
//     console.log(i)
// }

// let a1 ={
//     a:2,
//     b:3,
//     d:4

// }

// for(let a in a1){
//     console.log("marks of students  " +  "   is   " + a + "  and    " +   a1[a])
// }


///////////////////////////////  loop with arrey ///////////////////////
// let a1 = [2,3,4,5]

// a.forEach((elements)=>{
//     console.log(elements)
// })


// let a = first . getAttribute("class")
// console.log(a)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let a = ()=>{
// return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//      resolve(456)
//     },2000)
// })
// }

//  (async()=>{
//      let b = await a ();
//      console.log(b)
//      let c = await a ()
//      console.log(c)
//      let d = await a ()
//      console.log(d)
// })()
////////////////////////////////////////////////////////////upper wla code nhi chal rhe h /////////////////////////////////////////////////////////////////
// let arr = [2,3,4,4,5,6,7,8,9]
// let  [a,...rest]= arr
// console.log(a,rest)

// let obj = {
//     name: "aditi" ,
//     add: "qwe",
//     rollno: 22

// }
// console.log({ ...obj, name : "hew"  })
// // console.log({ name : "hew" , ...obj })
// let arr = [1, 2, 3, 4]
// console.log("aditi " , arr)

// message = "good world"

// function hello1(){
//    let message = "good evening"
    
//         // let message = "hey tobba tobaa"
//         console.log("hello" + message)
    
//  console.log(message)


// let c = function hello2(){
//  console.log(" i am c" + message)
// }

// return c

// }

// c = hello1()
// c()

// function returnfunction (){
// let x = () => {
//     let a = 1
//     console.log(a)
//     let y = () =>{
//         // let b = 2
//         console.log(a)
//         let z = () => {
//             // let c = 3
//             console.log(a)
//         }
//       a = 445
//         z()
//     }
//     a = 3333
//     y()
// }
// return x

// }

// let a = returnfunction()
// a()


//// ***************************      Arrow functions [ let a = () =>{}  ]  yhe wle hote h   ***********************

/******************************      clouser is a function along with its luxical environment     **********************/

// const a = ( name,greeting )   =>  console.log(  greeting + "  " + name)

// // a("adii" , "good afternoo")

// let x = {
//     name : 'aditi',
//     role: 'senior developer',
//     experince: 1,

// show : function () {
//     // let then = this
//     // console.log(this)
//     setTimeout( ()=>  {
//         console.log(`kya he bolu  ${this.name} aapke aage koi bol sakta h kya .......... \nAditi behnnnnnnnnnnnnnn`)
//     }, 2000);

// }
// }

// console.log(x.name , x.experince)

// x.show()


/////////////////////          EXERCISE       /////////////////////////////////////

// const array = firstvalue => {
// return firstvalue[0]
// }

// let firstvalue = [1,2,3,4,5,6]
// console.log(array(firstvalue))

// const k = (a,b) => a===100 ||b===100 || (a+b) === 100|| ((a,b)>=100)

// console.log(k(60,100))

////////////     logical opreters     ////////////////////////////


// &&  DONO MAIN SE DONO HE SHI HONE CHIYE TAB COD AAGE CHLEGA 
// let  temp = 30;
// if(temp > 0 && temp <= 30){
//     console.log("weather is nice ")
// }
// else{
// console.log("temperature is not goood")
// }



//  ||| OR 
// let  temp = -3;
// if(temp <= 0  ||  temp >= 30){
//     console.log("weather is'nt nice ")
// }
// else{
// console.log("temperature is  goood")
// }


///////    reverse method ///////

// const b = "kartik"
// let splitb = b.split("");
// let reverseb = splitb.reverse("")
// let joinb = reverseb.join("")
// console.log(joinb)

// async function harry(){
//     return 5
// }
// harry().then((x) => {
// alert(x)
// })

////////////  USING THE FETCH APIII   / ///////////////////////////////

LET P = 