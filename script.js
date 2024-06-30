//////////////////////// factorial of         /////////////////////////
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
/////////////         recursive    FABONACI SEQUENCE  YE CHL NHI RH AH
///   ////////////////////////////   fabonaacci main 1+1 +2+3  ' +' hota h 
// function arr(n) {
//   if (n < 2) {
//       return n
//    }
//    else{

//     return  arr(n - 1) + arr(n - 2)
//  }
//  }
//  console.log(arr(6))
//  console.log(arr(2))   

////////////////////////////////////////////            recursive     Factorial   of NUMBER issmain intooo hota h 
// function  Rfaboncee(n){
// if (n === 0) {
//      return 1
//   } else {
//   return n * Rfaboncee(n-1)
//  } }

//  console.log(Rfaboncee(0));
// console.log(Rfaboncee(5));
// console.log(Rfaboncee(4));

////////////////  two typr of search linear or binary or recusive search also
//////////////////////////////////////////////////////////////   liner search  linear time complexi //////////////////////////////////////////////////////
// let num = [1,2,3,4,5,6,7,8,9]
// function  search(n){
//     for (let i = 0; i <= num.length; i++) {

//         if (num[i]===n) {
//             return i
//         }
//     }
//     return -1
// }
// console.log(search(6))
// console.log(search(16))
// console.log(search(9))

/////////////////////////////////////   binary search //////////

// let arr = [1,9,2,8,3,7,4,6,5]
// let arr1 = arr.sort()
// // console.log(arr1)
// function aqq(n) {
//     for (let i = 0; i <= arr1.length; i++) {
//         if (arr1[i]===n) {
//             return i
//         }

//     }
//     return -1
// }
// console.log(aqq(2))
// console.log(aqq(1))
// console.log(aqq(0))

////////////////////////////////////////  binary search simple wla /////   practice ke jarurta h iss  topic per sab ke
// let a = [1, 2 , 5,  4 , 56,  92 , 9, 3,14,15,72]
// a.sort((x,y) => x-y) ///   sorting is really really needed
// let find =  29;
// let start = 0;
// let end = a.length - 1;
// let position = -1;   //  yha position maine -1 de de kyuki agr koi value match na kre toh -1 aana jaruri tha issliye
// while (start <= end) {
//     let mid = Math.floor((start + end) / 2)
//     //    console.log(a1)

//     if (a[mid] === find) {
//         position = mid
//         break
//     } else if (a[mid] < find ) {
//         start = mid + 1
//     } else {
//         end = mid - 1
//     }

// } console.log(position)

////////////////////////////   recursive binary code
// function recursive(arr, find) {
//     return search(arr, find, 0, arr.length - 1)

// }

// function search(arr, find, start, end) {
//     if (start > end) {
//         return -1
//     }


// let mid = Math.floor((start + end  )  /  2 )
// if (arr[mid] === find) {
//     return mid
// }


// if (arr[mid] >  find) {
//       return     search(arr, find, start,  mid-1   )                                        //  return end = mid - 1
// } else {
//      return   search(arr, find,  mid + 1,   end   )                                       //return   start = mid + 1
// }
// }
// console.log(recursive([1, 2, 3, 4, 5, 6, 7, 8, 9], 6) )    //5
// console.log(recursive([1, 2, 3, 4, 5, 6, 7, 8, 9], 5))          // 4
// console.log(recursive([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))             // 2

////////////////////////////////////  re practice of code //////
//  function binaryreecursive(arr, find) {
//     return search(arr, find, 0, arr.length - 1)
// }
// function search(arr, find, start, end) {

//     if (start > end) {
//         return -1
//     }
// let mid = Math.floor((start + end) / 2)
// if (arr[mid] === find) {
//     return mid;
// }

// if (arr[mid] > find) {
//     return search(arr, find, start, mid -1)

// } else {

//     return search(arr, find, mid +1, end)
// }
// }

// console.log(binaryreecursive([1, 2, 3, 4, 5, 6, 7, 8], 8))  /// 7
// console.log(binaryreecursive([1, 2, 3, 4, 5, 6, 7, 8], 1))   //  0
// console.log(binaryreecursive([1, 2, 3, 4, 5, 6, 7, 8], 22))   // -1
// console.log(binaryreecursive([1, 2, 3, 4, 5, 6, 7, 8], 4))

////////////   4 types of sorting algorithems
// let a =[1, 2, 3, 4,-5, 6, -7, 8]
// let a1 = a.sort((x,y)  => x-y)
// console.log(a1)

// primitive data type  -- boolean null nmber  stirng 
/*   let a = "aditi";
let b  = 'abhi';
a= b
console.log(a)  */
/////////////////////////////////  bubble sort /////////////////////////////
//  const arr = [1,3,5,7,9,8,6,4,2]
// function bubblesort(arr) {
//     let swapped
//     do {
//         swapped = false
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i]       /// let c = a // 2 toh ab c = 3
//                 arr[i] = arr[i + 1]         //  a = b          /// b =2 toh a =2
//                 arr[i + 1] = temp        ///    b = c        ///  c jo 3 tha toh ab b = 3
//                 swapped = true
//             }
//         }
//     } while (swapped);
// }
// bubblesort(arr)
// console.log(arr)   

///////////////////////////////////   insertion sort 





////////////////   quick sort   /// re practice 
/*  let arr = [1, -2, 3, 34, 6, 30, -12, -99]
function app(arr) {
    if (arr.length < 2) {
        return arr
    }
    let p = arr[arr.length - 1]
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < p) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }

    }
    return [...app(left), p, ...app(right)]
}
console.log(app(arr))  */

////////////////////////////////     merge sort   /////// re practice 
// let arr = [1, -3, -5, 6, 4, 3]
// function aap(arr) {
//     if (arr.length < 2) {
//         return arr
//     }
//     let mid = Math.floor(arr.length / 2);
//     let left = arr.slice(0, mid);
//     let right = arr.slice(mid);
//     return merge(aap(left) , aap(right))
// }

// function merge(left, right) {
// let sortadder = [];
//     while (left.length && right.length) {
//         if (left[0] <= right[0]) {
//             sortadder.push(left . shift())
//         } else {
//             sortadder.push(right .shift())
//         }
//     }
//     return [...sortadder, ...left , ...right]
// }
// console.log(aap(arr));

/////////////////////////////////////////  cartisian prbl ///////////re practice 
// let a = [1,2]
// let b = [ 3,4,]
// let c = [];
// for(let i=0; i<a.length; i++){
//     for (let j = 0; j< b.length; j++) {
//       c.push([a[i] , b[j]])

//     }
// }
// console.log(c)
//////////////////////////////////////////////////// climbing staires /////////////
// let a = 4
// function arr(n) {
//     var a = [1, 2]
//     for (let i = 2; i <= n; i++) {
//      a[i] = a[i-1]  +    a[i -2]
//     }
//     return a[n]
// }

// console.log(arr(1))

////////////////////////////  tower of hanoie bresl this /// baad main keuge 
// function arr(n , from , using , to) {
//     if (n === 1 ) {
//             console.log(` ${n} is transfer from ${from} to ${to}`)
//     }
//     arr((n-1) , from , using , to) 
//             console.log(` ${n} is travel from ${from} to ${using}`)

//     arr((n-1) ,from , using , to )
//         console.log(`$ {n }is travel from ${from} to ${using}`)

//     arr((n-1) , from, using , to)
//         console.log(`  ${ n} is travel from${from} to ${to}` )

//         arr((n-1) , from , using , to)
//         console.log(` ${n} is trravel from ${using} to ${to}`)

//         arr((n-1) , from , using , to)
//         console.log(`(n-1) travel from ${using} to ${to}`)
// }
// arr(3 , 'A'  , 'B'  , 'C')

//////////////////////////////////////////   practice questions 
// fabonoic no 
// let  a1 = parseInt(prompt("give any niumber "))
// function arr(a1) {
//     if (a1 < 2) {
//         return a1
//     } else {
//        return arr(a1- 1 ) + arr(a1 - 2)

//         }
//     }

// console.log(arr(a1))

//fabonoic series without recursion 
// let a = parseInt(prompt("give no "))
// function arr(a) {
//     const a11 = [0,1]
//         for(let i=2 ; i<=a ; i++){
//             a11[i] = a11[i-1] + a11[i-2]
//         }return a11
//     }
// console.log(arr(a))

/// prime no 
// let a = parseInt(prompt("give any no "))
// function arr(a) {
//     if (a === 1) {
//         return true
//     } if (a === 2) {
//         return true
//     }
//     else {
//         for (let i = 2; i < a; i++) {
//             if (a % i == 0) {
//                 return false;
//                 break;
//             }


//         }return true
//     }

// } console.log(arr(a))

////////////////////   ek jaise no
// let a = prompt("give same word")
// function arr(a) {
//    let a1 = a.split("").reverse().join("")
//    return a1===a ////////////  iska matlab check krne se hota h ke ye nhi h shi toh false warna true 
// }
// console.log(arr(a))


//////factorial 
// let a = parseInt(prompt("give any no "))
// function arr(a) {
//     if (a<1) {
//         return a
//     }
//     var add = 1
//     for (let i = 2; i <= a; i++) {
//         add = add*i

//     }return add
// }
// console.log(arr(a))

/////////////////////   amarstrong no 
// let num = prompt("give no ")
// let sum = 0
// let temp = num
// let length = num.toString().length
//     while(temp>0){
//         var d = temp%10;

//      sum += d** length 

//      temp = parseInt(temp/10)

//     }
//     if(sum==num){
//         console.log("it is amarstrong no ")
//     }else{
//         console.log("it is not amarstrong number ")
//     }

////////////  sum of numbers 
// let a = [1,2,2]
//     let sum = 0 
//    for(let i = 0 ; i <a.length ; i++){
//      sum += a[i]

//    }

//  console.log(sum)




//////////////   swap two numbers 

// let a =  77
// let  b = 66
// console.log(a)
// console.log(b)
// a = b;
// b= 77;
// console.log(a)
// console.log(b)

////////////////////////////////  bubble sort 
 var a = [1, 3, 5, 7, 9, 2, 4, 6, 8]

function arr1( a) {
   
    let swapped
    do{
            swapped = false
        for (let i = 0; i < a.length-1; i++) {
            if (a[i] > a[i + 1]) {
                let tem = a[i];  /// temp 3 a = 2 
                a[i] = a[i+1];
                a[i+1] = tem
             swapped = true
            }
        }
    }while(swapped)
}
arr1(a);
console.log(a )  

