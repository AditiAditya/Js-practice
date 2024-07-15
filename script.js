//////////////////////   DATA STRUCTURE ///////////  MAP 
//  agr * , + , - krna ho toh map kr sakta h
/* const q = [1,2,3,4,5,6,7];
let output = q.map((x) => x*2)  //////   x ka into array ke element or usske ke index no hota hai
console.log(output)
/////////  to find binary value
let output1 = q.map((x) => x.toString(2))
console.log(output1)  */

/////////////  FILTER   ///  HUM ISMAIN , EVEN , ODD , SUM ETC NIKAL SAKTE H , > , < bhi ////  main ye jo value apn ko chiye woh pure array main filter hoge 
//  gr ye niklna ho ke 30 se kam age ke , ke jinka naam aditi h ,ya kuch bhi sepecific toh filter 
// let a = [1, 3, 2, 5, 4, 6, 5, 7, 8, 7, 9]
// let q = a.filter((x) => x < 7);
// console.log(q)


////////////////   reduce ///   hum jab koi perticular value chiye toh reduce use hoga  
// let a3 = [1, 3, 2, 5, 4, 6, 5, 7, 8, 7, 9, 3, 5, 4, 6, 7, 1]
// let output = a3.reduce(function (acc, cur) {

//     if (acc[cur[a3]]) {
//         acc[cur[a3]] = acc[cur[a3]] + 1
//     } else {
//         acc[cur[a3]] = 1
//     }
// return acc
// }, {})
// console.log(output)

/////////////  some imp points
// insert /  remove from  END --- O (1)
// insert / remove from the Beginning ---  O(n)
// Access --- O (1)
// search --- O(n)
// pop / push ----  O(1)
// slice / splice /concat / shift / unshift --   O (n)
// foreach / map / filter / reduce --- O(n)



///////////////////  OBJECT'S 
// insert  ---  O(1);
// access --- O(1)
// remove --- O(1)

////////    HOME WORK ////////
/// index se hum le niklate h ke koi element kis number pr hai 
// let a = [1,3,5,7,9,2,4,6,8, 'aditi']
// // let s = 
// a.sort()

// let d = s.length 
// console.log(a.indexOf(9))
// console.log(a.getValue(9))
// a.shift()
// a.push(10)
// a.pop()

// let a1 = a.filter((x) => x ===5 )

// console.log(  a1 , a.indexOf(5))
// console.log(a)
// for (const item of a) {
//     console.log(item)
// }


// let f = a.toString()
// console.log(f)

// let b  = [11,13,14,17,12,16]
// b.sort()
// console.log(b)
// let r = a.concat(b)
// console.log(r)
// /////////   from string to array    we use split method aur Array.from(c)  method
// let c = 'hogi aditi tiwari  ke jeet '
// // let w = Array.from(c)
// let w = c.split(' '  )
// console.log(w)

// //// to find array is empty or not 
// // let u = [] 
// // if (u.length === 0) {
// //     console.log("arr is empty")
// // } else {
// //     console.log("arr isn't empty")
// // }
// // for copy 
// // let u = Array.from(a)
// // console.log(u)
// // console.log(a)

// ////  for inset sepecific value // AGR LET DELETED KE KE MATLAB DUBARA LIKH KR KRA TOH * DELETED ITEM AAYEGE ** AUR DIRECT KIYA TOH PURA ARRAY AAYEGA
// let deleted  = a.splice(4 , 2 , )
// console.log(deleted)
// console.log(a)

//////////////////////////   2nd part 
//  to remove dublicate watch decode 
// let dublicate = [1,3,5,7,7,5,2,3,9,1,1,2,3,4,5,6,7,8,9,10]
// dublicate.filter((x , y )  => x - y  )
// console.log(dublicate)

// let methodnewset = [...new Set(dublicate)];
// console.log(methodnewset)


// let forsort =  dublicate.filter((x , y )  => {
// return dublicate.indexOf(x) == y
// })
// console.log(forsort)

// let s = [1,2,4,5,6,7,8,9,10] ; 
// let total = ((s.length+1)  * ( s.length + 2 ))  /  2 ;
// for(let i = 0 ; i < s.length ; i++){
//     total = total - s[i]
// }

// console.log(total)


//////////////////////////////    target typeee  question 
// let a = [1,2,3,4,5]
// let x = a[0]
// x = 1
// for(let i = 1 ; i <a.length -1 ; i++){
//     a[i-1] = a[i]
//     a[a.length(a) - 1]  =  x
// }
// console.log(x)




///////////////////////////  test ////////////////////////////////////////
// let a = prompt("give an array ???")
// let q = a.toString()
// function arr(q) {
//     let w = q.split("").reverse().join('')
//     return w 
// }
// console.log(a);
// console.log(arr(q)) ;    /////////////   complete


/// 2 
// let a = prompt("give a word  ??")
// function arr(a) {
//     let check = a.split("").reverse().join("")
//     return check ===a
// }
// console.log(arr(a))  /////////   its work 


//// 3  


// for (var i = 1; i < 100; i++) {
//     if (i % 3 === 0) {
//         console.log(`${i} fizz`)
//     }

//     if (i % 5 === 0) {
//         console.log(`${i} buzz`)
//     }

//     else {
//         console.log(`${i} buzzfizz`)
//     }

// }








////////////  4

// let a = [1,5,7,8,2,3,4,9]
// a.sort()
// console.log(a)
// console.log(a.indexof(-1) )

/////////////////  5
let a = [1,5,7,8,8,2,3,3,4,1,1,2,3,4,3,2,1,1,5,9]
a.sort()
function arr(a) {
    let w = [...new Set(a)]
    return w
}
console.log(arr(a))


//////  6
// let a = prompt("give an no???")

// function arrr(a) {

//     if (a === 1) {
//         return a
//     }

//     if (a < 1) {
//         console.log(`${a}PLEASE ENTER VALID NO `)
//     }

//     if (a > 1) {
//         let k
//         for (let i = 1; i <= a; i++) {
//             k = k * i
//             return k
//         }
//     }

// }
// console.log(a)
// console.log(arrr(a))




////////////  7
// let a = prompt("give any no???")
// function arr(a) {
//     if (a===1) {
//         console.log(`${a} enter positive no only `)
//     }
// for (let i = 0; i<a.length; i++) {

//   if(a%2===0){
//         return  false

//     }
// break
//    else{
//        return true
//     }
// }

// }

// console.log(arr(a))


////////  /// 8
// let a = prompt("give any no???")

// function  arr(a) {
//     if (a < 1) {
//     console.log(`${a}  give valid values`)
// }
// if(a>1){
//     let r =1 ;
//     for (let i =2  ; i < a.length ; i++) {
//           r = r + a[i]
//          return r
//     }
// }
// }
// console.log(arr(a))
