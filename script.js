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


// const a = new Map([['a', 1] , ['b' , 2 ]])
// a.add  ('c' , 3) ; 
// console.log(a)

class nodes{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class linked{
    constructor(){
        this.head = null ;
        this.size = 0 ; 
    }

    isempty(){
        return this.isempty===0
    }

    issize(){
        return this.size
    }

    prepand(value) {
        const node = new nodes(value)
        if(this.isempty()){
            this.head = node
        }
        else{
            node.next = this.head
            this.head = node 
        }
        this.issize++
    }
}

let link = new linked();
console.log(' size  of this link is' , link.issize())
console.log(' is this empty or not' , link.isempty())
list.prepand(10)
list.prepand(20)
list.prepand(30)