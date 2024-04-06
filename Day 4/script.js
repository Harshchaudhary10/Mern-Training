// let a=new String("Hello")
// let b="Hello"
// if(a===b){
//     console.log("yeS")
//     }
// else
// console.log("no")    
// const obj= {
//     'name': 'Ajay',
//     'lastnbame':'Singh'
// }
// document.write(JSON.stringify(obj))
// console.log(obj)
// let arr =[2,3,4]
// arr=[4,6,9]
// console.log(arr)
// const obj={
//     "name":"Ajay"
// }
// const arr=[1,2]
// console.log(Array.isArray(obj))
// // console.log(Array.isArray(arr))
// function checkObjectType(x) {
//     if (Array.isArray(x)){
//         console.log("Not obj");
//     } else if(typeof(x)=="object"){
//         console.log("Object");
//     }
//     else{
//         console.log("Not object")
//     }
// }
// checkObjectType([1,2])
// checkObjectType({name:"ajay"})
// const arr=['name',2]
// const obj={
//     'name':"ajay",
//     "age":20
// }
// for(let i of arr){
//     console.log(i)
// }
// for(let i of obj){
//     console.log(i)
// }

// for(let i in obj){
//     console.log(i)
// }
// console.log(window)
// console.log(window.document)
// console.log(console)
// console.dir(window)
// const res=document.querySelectorAll('div>H3')

// document.getElementById("ht1")
// console.log(res)
const ne=document.createElement("h3")
ne.innerText="Dynamic Text"
// console.log(ne)
// document.body.appendChild(ne)
const firstDiv = document.getElementById("ht1")

console.log(firstDiv)
firstDiv.appendChild(ne)