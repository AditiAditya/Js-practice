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


// &&  DONO MAIN SE       *DONO HE SHI HONE CHIYE *    TAB COD AAGE CHLEGA 
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

// function q(a){
// return a.concat(a)
// }
// console.log(q([1,2,3,4])) 

// let a = [1,2,3,4]
// let e = a.concat(a)
// console.log(e)

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

///////////////////////////////

// function ret(src){
//     src.split("").foreach(function (elem){
//      if(occurences.hasOwnProperty(elem)===false)
//        occurences[elem]= 1
//     }
//         else
//      })
// }


/////// question add a array/
//by for loop 
// let a = [1,2,3,4,5,6,7,8,9,]
// let sum = 0 ;
// for(let i = 0 ; i< a.length ; i++){
//     sum+= a[i]
// }
// console.log(sum)

// BY FOREACH LOOP 
// let num = [1,2,4,6,7,] 
// let sum = 0
// // num.forEach((num1)=>{
// //     sum+=num1
// // })
// // console.log(sum)

// num.forEach((elem)=>{
//     sum += elem
// })
// console.log(sum)

////////////////////////question write only no not string at all
// let a = [ 1,2,3,4,5,"aditi" , true , " rinkiya ke papa " , 8 , false , true ]
// let s = [];
// let sum = 0
// a.forEach(element => {
//     if (typeof(element)==="number") {
//         s.push(element)
//         sum = sum + element
//     }
// });
// console.log(sum)

///////  2   EXWRCISE QUESTION; //////////////////////////
// let a = [1,2,3,4,5,6,7,8,9] 
// let sum = 0;
// a.forEach(elem => {
//     sum += elem
// });
// console.log(sum)

//  1  //
// let num = [18,22,33,73,99,68,13]
// let mine = Math.min(...num)
// console.log(mine)

// 3  ye nhi hua average wla 
// let value = [ 1,2,34,5,6,7,]
// let sum = 0
// for(let i=0;i<=value.length ; i++){
//     sum+= value[i]
//    return sum/value.length
// }

//  to finnd specific valuee 
// let aditi = [1,2,'aee', 'hey' , 5,6,7,8]
// console.log(aditi.includes ( 7 )  )


//  duplicate hatane ke liye /
// let arr = [1,2,2,3,4,5,4,5,'aple', 'mango','aple',3]
// function arrw(arr) {
//     return [...new Set(arr)]
// }
// console.log(arrw(arr));

/////
// let arr = [1,2,2,3,4,5,4,5,'aple', 'mango','aple']
// arr.reverse(arr)
// console.log(arr)
///////////////  asending order main  or decnding main 
// let arr = [1,2,2,3,4,5,4,5,'aple', 'mango','wple' , 'kite ' , 'qqee']
// arr.sort()
// arr.reverse()
// console.log(arr)

/////////  merge two sorted array // some error
// let a1 = [1,4,2,5,3]
// let a2 = [,6,9, 2,7,8]
// a1.sort()
// a2.sort()
// a1.concat(a2)
// let a3 = a1 +   a2

// console.log(a3)
// // position of array 
// let a1 = ['aditi' , 'aer' , 'ketf' , "mwer" , 'lwe' , 'nnn' ]
// let k = a1.indexOf('lwe')
// console.log(k)

// //// Occurences of valuse 
// let a1 = [1,4,2,5,3,3,4,5,6,7,8,1, 'aditi',  8, "kitw", "yelloj"]
// let b1 = {}
// for (const i of a1) {
//     if ( a1[i] in b1) {
//         b1[a1[i]] = b1[a1[i]] + 1
//     } else {
//         b1[a1[i]] = 1
//     }
// }

// console.log(b1);

////////////////////////////  duplicate hataya + assending order main likha   ///////////////
// let a1 = [1,4,2,5,3,3,4,5,6,7,8,1]
// function new1(a1){
//     return [...new Set(a1)]
// }
// a1.sort((a,b) => a-b)
// console .log(new1(a1))

///////////////////////////////    second largest no  with using of sort methodds /// 
// let a1 = [1,4,2,5,3,3,4,5,16,17,8,1]
// a1.sort((a,b) => b-a)
// console.log(a1)
// console.log(a1[1])

/////////// by another method
// let a1 = [1,4,2,5,3,3,4,5,16,17,8,1]
// let  first = -Infinity ;
// let second = -Infinity
// for(let i=0 ; i<=a1.length-1; i++) {
//   if (a1[i]>first) {
//     second = first
//     first = a1[i]
//   } 
// }
// console.log(second)  ///////////////////////////// look abhi raj video for this/////

//////////////////////////// even odd median     /////////////////
// let num = [1,2,3,7,4,5]
// num.sort((a,b) => a-b)
// let median;
//     if (num.length%2 !=0) {
//         let into = Math.floor(num.length/2)
//         median = num[into]
//     } else {
//             let into = Math.floor(num.length/2)
//             median = (num[into]  +  num[into -1] )/2
//     }
// console.log(median)
/////////////////////////////////////////////////////////////////////  reverse methoddddd
// let num = [1,2,9,3,5]
// num.sort((a,b) => a-b)
// let median;
//     if (num.length%2 ===0) {
//        let into = Math.floor(num.length/2)
//        median = (num[into] + num[into - 1])/2
//     } else {
//             let into = Math.floor(num.length/2)
//             median = num[into]
//     }
// console.log(median)             //////////////////////  ye galat aaa rha h ////////////////

//////////////////////////////////////////// sepicific no find krne ke liye /// true or false main ans aata hai iska 
// let na = [1,2,9,3,5, 'aditi'  , 4 , "raju" , "kana"]
// console.log(na.includes(8))
//////////////////////
// let a = {
//      name : 'aditi'
// }
// console.log(a)

///////////////////////////// remove sepecific value  using of pop push slice splice
// let a = [1,2,3,4,5,6,7];  /// push  add the element in the endd /// pop remove the value from the end 
//  a.splice(1,3, )    /// slice()  two parts main he cut hote h (1,3) jo third index h woh include nhi hoge aur ye nhi array  main aajayega
// console.log(a)          /// splice   main (first starting point , kya delet krna h  ,  "kya daln H ")
                                     //// shift( ) remove th first elemeents in js 


//primitive data type  -- boolean null nmber  stirng 
// let a = "aditi";
// let b  = a;
// b = "abhi"
// console.log(a)
//  NON --- primitive data type  ---- array ,, object 
// let obj =  {
//      name : 'aditi',
//      class : "pass ",
//      pass : 255
// }

// let obj2 = obj;
// obj2.name = "shilpa"
// console.log(obj2)
// console.log(obj)

 //// to find frequency  elements
//  let q = [1,2,3,1,2,3,1,2,3,1,1,1,]
//  let w = {}

//  q.forEach(elem => {
//      if (!w[elem]) {
//           w[elem] = 1
//      } else {
//           w[elem] = w[elem] + 1
//      }
//  });
//  console.log(w)

// let q = [1,2,3,1,2,3,1,]
// let w = {}
// for (const i of q) {
//      if (w[i]) {
//          w[i] +=1
//      } else {
//           w[i] =  1
//      }
// }
// console.log(w)

//////////////   first and last elements of an array 
// let a = ["adiiti" , "raj" , 1, 3,4, "hum "]
// let r = a.pop()
// a.shift()
// console.log(r)
// console.log(a.shift())
/////////////////////////
// let a = ["adiiti" , "raj" , 1, 3,4, "hum "]
// let w = {}
// for(let i of w) {
//   a.concat(w)
// }
// console.log(a)
////////////////   to find all falsy values    only one  method is use in this 
// let a = ["" , "raj" , 1, 3,4,  undefined, null, 3 , 6 ,"", 9]
// let w = a.filter(Boolean)
// console.log(w)
//////////////////////      To check positive no 
let no = [ 1,2,3,4,-2,-3,-5,-6,-7,-5,5,3,7,3,-4]
// function aee(no){
//      let no1 = no.filter(x=>x>-1)
// }
// console.log(no)
// no.sort(function(a,b) {
//      return b - a;
//   });
//   let x = no.length
//   for (x; x--;) {
//      if ( no[x] < 0 ){
//         no.pop();
//      }
//   }
//   console.log(no)