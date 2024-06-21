

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
// let no = [ 1,2,3,4,-2,-3,-5,-6,-7,-5,5,3,7,3,-4]
// // function aee(no){
// //      let no1 = no.filter(x=>x>-1)
// // }
// // console.log(no)
// // no.sort(function(a,b) {
// //      return b - a;
// //   });
//   let x = no.length
//   for (x; x--;) {
//      if ( no[x] < 0 ){
//         no.pop();
//      }
//   }
//   console.log(no)

//  10- question 
// let a = prompt("please enter element")
// function aee(a){
// let reverse = a.split("").reverse().join("")
// return reverse == a
// }


// console.log(aee(a))

//////////////////////////////// 9 
/// to reverse a string 
// let a = prompt("What is your name ? ")
// // let a  = {}
// let a2 = a.split("").reverse().join("");
// console.log(a2)

// let number = prompt ("give only even no ")

// function arr(number){
//     if (number%2===0 ){
//       console.log("it is an even no buddy .. u are too good  ")
//     }else {
//         console.log("it is not even no ... what are u doing ")
//     }
// }
// console.log(arr(prompt("Give Even no budy !!"))) //////////  ye un degine de rha h 

////////////////////////////////////////////
// let num = prompt("give positive no ??")

// if (num==0) {
//   console.log ( `factorial of ${num} is 1`)
// } else if(num<0){
//   console.log(`neagative no is not alowed ${num}`)
// }
// else{
//   let blanck = 1;
// for (let index = 1 ; index <=num; index++) {
//  blanck = blanck * index
// //  console.log(`factorial of ${num}  is ${blanck}`) 
// }
// console.log(`factorial of ${num}  is ${blanck}`) 
// }


/////////////////////////////////////////////////////////
// let num = prompt("give any a prime  no ??")

// if(num == 1){
//   console.log(`${num} is not prime no `)
// }
// if(num == 2){
// console.log("it is prime no ")
// }
// else if(num <= 0 ){
// console.log(`${num} no is invalid `)
// }
// else{
//   for(let i = 2 ; i <= num; i++)
//     if (num%i == 0) {
//       var res = `${num} is not prime no `
//       break
//     } else {
//       var res = `${num} is a prime no `
//      }
// console.log(res)
// }

////////////////////////////////////////////////////////////////////////////
//  REVISE THE PREVIOUS CODE 
// let a = prompt("give name ")
// function arr(a){
//   let w = a.split("").reverse().join("")
//    return w
// }
// console.log(arr(a))

///////////////////////////////////
// let a = prompt("give ")
// function arr(a){
//   let k = a.split("").reverse().join("")
//   return k ===a
// }
// console.log(arr(a))

////////////////////////////////////////////////////
// let a = prompt("give value")
// if (a%2==0) {
//   console.log("it is even ")
// } else {
//   console.log("it is not")
// }
/////////////////////////////////////////////////
// let a = [1,2,3,4,5,6,7,8,9,10]
// let b =[];
// let c = []
// for (let i = 0; i < a.length; i++) {
//   const element = a[i];
//   if (element%2==0) {
//     b.push(element)
//   } else {
//     c.push(element)
//   }
// }console.log(b )
// console.log(c)
/////////////////////////////////////////////////////////// factorial of 
// let num = prompt("give any no")
// if (num ==0) {
//   console.log("its factorial is always 1")
// }
// else if(num<=0){
// console.log("therre is no factorial of -ve no ")
// }
// else {
//   var a1 = 1
//   for (let i = 1; i <=num; i++) {
//     a1 = a1* i
//   console.log(` ${a1}`)
// }
// console.log(`{a1}  is that`)
//   }

//////////////////////////////
//nested
// for (let index = 1; index <=5; index++) {
//       for (let index1 = 1; index1<=  index ;  index++) {

//      console.log(index1)
//       } 
// } 
////////////////////////  prime no check 
// let num = prompt("give prime no ??")
// if (num<=1) {
//       console.log("it is not prime no ..wheter it is prime or compositive no  ")
// }
// else if (num==2) {
//       console.log("it is prime no")
// }
// else {
//       for (let i= 2; i < num; i++) 
//             if (num%i==0) {
//                var r = `${num} it is not prime no `
//                   break
//             } else {
//                   // console.log("ha ha prime h ")
//                   var r = ` ${num} it is prime no `
//             }
//             console.log(r)
//       }
//  1  ///////////////////////////////////////////////////////////////////////////
// let num = prompt(" give any prime no  ")


//     if (num==1) {
//         console.log("its neither prime nor compositive ")
//     } 



//   else if(num<1) {
//         console.log("-ve no is not allowed")
//     }

//     else {
//         for (let i = 2; i <num ; i++) {

//             if (num%i==0) {
//               var element= `${num}  is not prime no `
//                 break
//             } else {
//                 var element = ` ${num}  is prime no `
//             }

//         }console.log(element)

//     }


////////////////////////////////////////////////////////////////
// let a = [1,2,3,4,5,6,7,8,9,10]
// let b =[];
// let c = []
// for (let i = 0; i < a.length; i++) {
//   const element = a[i];
//   if (element%2==0) {
//     b.push(element)
//   } else {
//     c.push(element)
//   }
// }console.log(b )
// console.log(c)

//////////////////////////
// var a = [1,2,3,4,5,6,7,8,9,10]
// let a1 = a.filter((x)=> x%2)
// console.log(a1)
///////////////////////////////////////////////////////
// let a =prompt("give any positive no ")
// let number = Number.parseInt(a)


// if (a<=0) {
//     console.log("factorial of this no is not valid ")
// } else if(a==1){
// console.log("its factorial is always 1")

// }
// else {
//     let b = 1
//     for (let i= 1 ; i<= a;  i++) {
//        if (a>1) {
//         b = b*i
//         console.log(` factorial of ${a} is  ${b}`)
//         }
//     }
// }
////////////////////////////////////////////////////////////////////////////
// let a = prompt("give any word")
// function arr(a){
//     let B = a.split("").reverse()
//     return B === a
// }console.log(arr(a))
////////////////////////////////////////////////////////////////
// let a = prompt("give any word")
// function arr(a) {
//     let r = a.split("").reverse().join("")
//     return r
// }
// console.log(arr(a))
////////////////////////////////////////////////////////////////////////////
// let a = prompt("give any word")

// if (a<=0) {
//     console.log("it  isnot valid")
// } else if(a==1) {
//     console.log("heyy its not even or oddd")
// }else{
//     if (a%2==0) {
//         console.log('yes it is even ')
//     } else {
//         console.log("it is oddd")
//     }
// }
/////////////////////////  ye nhi hua abhi 
// let a = ["adiiti" , "raj" , 1, 3,4, "hum ", 444, 67, 99 ]
// // console.log(a)
//  let a11  = a.splice(2, 1, "drum", "guitar")
//  console.log(a11)
//////////////////////////////////////////////////////
//  let a = [1,2,3,4,5,6,7,8,9,10]
//  let b ={}
// for (let i = 0; i<a.length; i++) {
//     let num =  a[i];
//     b[num] = b[num] ? b[num] +1 : 1;
// }
// console.log(b)  
/////////////////////////////////////////////////////////////////////////////////////////////////////////

// let a =   [1, 2, 3, 4, 5,  6, "NA" ,  4,  6,  5, 6, 5, 6,]    
// console.log(a)
// let a1 =a.splice(6,2,'naha')
// console.log(a1)

///////////////// WRONG CODE HERE ///////////////////////////////////////////////
// let a =   [1, 2, 3, 4, 5,  6, "NA" ,  4,  6,  5, 6, 5, 6,]    
// let b ={}
// for (let i = 0 ; i <a.length; i ++) {
//    var num= a[i];
//     if (num== b) {
//     num = b + 1
//     } else {
//         b == 1
//     }
//     console.log(num)
// }
///////////////// WRONG CODE UPPER //////////////////////////////////////////////let 


// let word = prompt("give any word ")
// let letter = prompt ("give any letter ")

// var startfrom = []
// for (let i = 0; i < word.length; i++) {
//     if (word[i] == letter) {
//         startfrom++
//     }
//     // console.log(`${word} = ${letter } = ${ startfrom}`)
// }console.log(`${word} = ${letter } = ${ startfrom}`)

/////////////////////////////////////////   another method /////////////////////////////////////////////////
// let a1 = [1,4,2,5,3,3,4,5,6,7,8,1, 'aditi',  8, "kitw", "yelloj"]
// let b1 = []
// for (let i = 0; i < a1.length; i++) {
//     let num = a1[i];
//         if ( num in b1) {
//         b1[num] = b1[num] + 1
//         } else {
//         b1[num] = 1
//         }
// }
// console.log(b1);



// 3 method /////////////////////////////////////////////////////////////////////////////////////////////////////////
//  let a = [1,2,3,4,5,6,7,8,9,10]
//  let b ={}
// for (let i = 0; i<a.length; i++) {
//     let num =  a[i];
//     b[num] = b[num] ? b[num] +1 : 1;
// }
// console.log(b)  


//// practice of all 3 method ///
// let a = prompt("hey give any word buddu ")
// let b = prompt("give any letter ")
// let c = []
// for (let i = 0; i < a.length; i++) {
//     let ele = a[i];
//     if(ele==b){
//        c++
//     }
// }console.log(c)



// ////////////////// series 
// function fibo(n){
//     let fibo1 = [0,1]
//     for (let i=2; i<n; i++){
//        fibo1[i] = fibo1[i-1] + fibo1[i-2]

//     }
//  return fibo1

// }
// console.log(fibo(5))// yha ye dekha  jta h  ... jaise fibo (6 ) diya toh 6 tk uske length hoge sum kuch bhi ho 

//////////////////////////////////////////////
/////////factorial
// function arr(n){
//     let r = 1
//     for(let i=2; i<=n; i++){
//         r = r *i
//     }return r
// }
// console.log(arr(5))

/////////////////////////////////////////////////////  facctorial another method
// function arr(num){
//     if(num===0){
//         return 1
//     }else{
//         return num*arr(num-1)
//     }
// }
// console.log(arr(7))
/////////////// prime no is this ////////////
// let num = parseInt(prompt("no de do "))
// if (num<=1) {
//     console.log("it is not peime no ")
// } if (num==2) {
//     console.log("ghhhvf")
// }


// else {
//     for (let i = 2; i<num; i++) {
//         if (num%i==0) {
//            var e = ("it is not prime no  ye ")
//             break
//         } else {
//            var e = ("prime no h yeee h ye ")
//         }
//     }
//        console.log(e)

// }
/////////////////////////////////////////////////////  a;lgorthem method /////////////////////
// function prime1(n) {
//     if (n<2) {
//         return false
//     }else{
//         for (let i = 2; i <=Math.sqrt(n); i++) {
//             if (n%i===0) {
//                 return false
//                 break
//             }
//         }
//         return true
//     }
// }console.log(prime1(25))
// console.log(prime1(24))
// console.log(prime1(5))

/////////////////////////////////////  / //////////////////

// function power(n) {
//     if (n<1) {
//         return false
//     }
//     while (n>1) {
//         if (n%2 ==1) {
//             return true
//         }
//         // return false
//     }
//  return false
// }
// console.log(power(2 ))
// console.log(power(8))
// console.log(power(5))

function arr(n) {
    if (n < 2) {
        return n
    }
    else {
        return arr(n - 1) + arr(n - 2)
    }
}
console.log(arr(6))
console.log(arr(2))
console.log(arr(120))
