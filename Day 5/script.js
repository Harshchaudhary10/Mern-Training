// let arr=[2,10,21,32]
// function printArray(arr){
//     for(let i=0;i<arr.length;i++){
//         console.log(i)
//     }
// }
// printArray(arr)
let arr=[2,10,21,32]
// function printPretty(elem,a,b,c){
//     console.log(':',elem,b,c)
// }
// function printArray(arr){
//     for(let i=0;i<arr.length;i++){
//         printPretty(arr[i])
//     }
//     arr.forEach(printPretty)
// }
// printArray(arr)
// arr.forEach((a)=>{
//     console.log(a)
// })
// arr.map((a))
// console.log('GEC START')
// function printPretty(){
//     console.log('prettyStart')
//     let ans=2+3
//     console.log(ans)
//     console.log('prettyEnd')   
// }
// setTimeout(printPretty,1000)
// console.log('GEC END')
// console.log('start')
// const req = fetch("")
// console.log(req)
// req.then(() => console.log('Fetched'))
// console.log('end')
console.log('start')
fetch('https://dummyjson.com/products/1')
.then(res => console.log(res))
.then(json => console.log(json))
console.log('end')