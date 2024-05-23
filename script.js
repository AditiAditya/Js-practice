
///////practice\\\\\\\\\\\\\\\\\\\\\\

// function my(see){
// console.log(see)
// }

// my("aditi");

// class hello{
//           message() {
//             console.log("hwllo everyone")
//           }
// sorry(){
// console.log("sorry everyoenggugug")
// }
// }

// let a = new hello();
// a.message()

// a.sorry()


// let name = ["adit", "adj", "aes", "asxz"]
// for(let i=0; i<name.length; i++){
//   console.log(name[i])
// }

// let cities=['bhopal',"delhi","mumbai","kolkata"];

// for(let city of cities){
// console.log(city.toUpperCase())
// }

// let sum= [85, 97, 44, 37, 76, 60];
// let marks=0

// for(let no of sum){
//   marks+=no


// }
// let avg= marks/sum.length

// console.log(`avrg marks of student is  = ${avg}`)


// let  items = [250, 645 , 300 , 900 , 50]

// let idx = 0;

// for(let val of items ){
// console.log(`the value of ${idx} = ${items}`)

// }


// class hey{
//           message(){
//             console.log("Hello eveeryone ,,its aditi ");
//           }
// call(){
//     console.log("i am expert in coding >.....")
// }

// hello(){
//     console.log("hii \"its expert\" ")
// }

// }

// let a = new hey ();
// a.message()
// let s = new hey
// s.call()

// let d = new hey
// d.hello()
////////////////////(//////////      19 05 2024     /////////////////////////////////

// class worker{
// constructor(){
//   console.log(" ")
// }
// }
// let z = {
//   name: "aditi",
//   language: "javascript"
// }
// console.log(z)

// let a = {
//     run :  ()=>{
//         alert("helllooooooooooo")
//     }
// }

// z._____proto________= a
// con

// let a = [3,2, 3 ,2 ]


// //////for of///
// for(let i of a ){
// console.log(i)
// }

// let as = "aditi";
//  let arr = Array.from(as)
// console.log(arr)
// // typeof(as)

// for (i=0; i<3; i++){
//   consol

// const ad = {
//   aditi: 77,
//   aditya: 67,
//   afjijj: 48,
//   ffhhh: 99,
//   namm: 100,
// }

// for(let a in ad ){
//   console.log("marks of students " +   a    +  ad [a])
// } 


// let  w = [1,2,3,1,2, 3]


// for(let i of w){
// console.log ( i)

// }

// w.forEach((element)=>{
//   console.log(element*element)
// })



///////////////22 05//////////////////

// class railwayforms{
//   constructor(){
//     console.log("constructor aagya")
//   }
//   submit(){
//     alert("your form has been submitted")
//   }
//   cancel(){
//     alert("your form has been canceled")
//   }

// }
// let aditi = new railwayforms()

// let ddd = new railwayforms()
// let ss = new railwayforms()
// aditi.submit();
// ddd.submit();
// ss.cancel();

// class cats  {
// constructor(name , colour){
//   this.name = name;
//   this.colour= colour;

// }
// run(){
//   console.log  (this.name + "is" + 'running')
// }
// shout(){
//   console.log  (this.name + "is" + 'CRYING')
// }
// }

// class dog extends cats {
//   jump(){
//     console.log("he is jumping" + this.name +  888+this.colour)
//   }

//   laugh(){
//     console.log(`${this.name } is laughing`)
//   }
// }

// let any  = new cats("meow" ,  "green")
// let typer = new dog("aaoo" ,'red')

// any.shout()
// typer.jump()



// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// class employess {
//   constructor(){
//     console.log(`new constructor`)
//   }
//   loginin (){
//     console.log(`employess logined in`);
//   }
//   logout(){
//     console.log(`employess logiedout`)
//   }
//   requestedleaves (leaves){
//     console.log(`asking for ${leaves}`)
//   }
// }
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// class office extends employess{
//   constructor(){
//     console.log(`2 c0nstructor`)
//   }
//   extraleaves(x){
//     clonsole.log(`asking for ${x}`)
//   }

//   requestedleaves (leaves){
//     console.log(`asking for ${leaves + 1} (one extra)`)
//   }
// }

// let a = new office()
// a.loginin()
// a.requestedleaves()
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Animal {
  constructor(name){
    this.name = Animal.capitalize (name)
  }
run(){
  alert("Animal" + this.name +"is running")
}

static capitalize(name){
  return name.charAt(0).toUpperCase() +name.substr(1 , name.length)
}

}

a = new Animal("xyz")
a.run()

