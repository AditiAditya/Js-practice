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
//question1
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

////////////////////////////////

//ouestion 2
// let cartoon = ['sizuka', 'doreamon','bheem','motu']
// console.log(Array.isArray(cartoon))
// // console.log(cartoon)

//question 3 
// let a = [1,2,3,4,5,6,7,8,9]
// a.length = []

// question 4
// let a = [3]
// if (a%1===0) {
//     console.log("yes it is integer")
// } else {
//     console,log("it is not integer")
// }
//OR DIRECT BHI KR SKTE  H CONSOLE PER      Number.isInteger(value de kr )  

///question 5 
// let e = [1,2,3,4,5,6,7,8,9,]
//  e.concat(e)
// console.log()


//question 6 
// function  a(num){
//    return Number(num.toString().split("").reverse().join(""))
// }
// console.log(a(23))

// let a = "132"
// let splita = a.split("")
// let reversea = splita.reverse("")
// let joina = reversea.join("")
// console.log(joina)


//// question 7 
// function a(s){
//  var reversed = s.split("").reverse().join("")
//   return reversed===s
// }

// console.log(a('loop'))

//question 8
// function aditi(n){
//    return n.split("").sort().join("")
// }

// console.log(aditi('apple'))