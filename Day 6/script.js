// console.log('Start');

// setTimeout(()=>{console.log('Timeout...')},0) 

// console.log('end');



// setTimeout(()=>{console.log('Timeout 1...')},40000)
// console.log('Start');
// setTimeout(()=>{console.log('Timeout 2...')},20000)
// console.log('intermediate');
// console.log('end');



// function createOrder(x, fn){
//     console.log(x);
//     setTimeout(()=>{fn('lik123')},1000);
//     setTimeout(()=>{fn('lik123')},1000);
// }

// function makePayment(orderID){
//     console.log(orderID);
// }

// createOrder('soap',makePayment);



// const pr = new Promise((resolve,reject)=>{
//    setTimeout(()=>{resolve("Some items are Out of Stock");},5000);
// });

// console.log(pr);

// pr.then((res)=>{
//     console.log(pr);
// }).catch((err)=>{
//     console.log(err);
// })



// const pr = new Promise((resolve,reject)=>{
//     setTimeout(()=>{reject("Some items are out of stock");},0);
// });

// setTimeout(()=>{console.log("First Timeout...")},0);
// pr.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })




// setTimeout(function abc(){
//     console.log('I am One');
// },0);

// const pr = new Promise((res,rej)=>{
//     setTimeout(()=>{res('done')},0);
// })

// pr.then(function b(res){
//     console.log("promise completed", res);
// });

// setTimeout(function xyz(){
//     console.log("I am Two");
// },0);
// console.log('hello')
// const arr=[10,20,30]
// const arr2=[10.11,22.32,34.76]
// // const ans = arr.map((a)=>{
// //     console.log(a);
// //     return a*2;
// // });
// // console.log(ans)
// const ans3= arr.map(a=>a**2)
// // console.log(ans3)
// const arr=[1,,2,3,4]
// const ans=arr.push(99)
// const arr2=arr.map(a=>a**2)
// console.log(ans3)
const countries = ["Delhi,India", "Dc,United States", "kjfnjs,Italy",'iujf,Iraq', "You,Germany", "Wang,China", "Lao ,Brazil"];

// for (let country of countries) {
//   if (country.toLowerCase().includes('i')) {
//     console.log(country);
//   }
// // }
// const ans=countries.filter((a)=>a.toLowerCase().includes('india'))
// console.log(countries)
const array = [1,4,7,8,9];
const result = array.reduce((accumulator, currentValue, currentIndex) => {
  accumulator.push({ index: currentIndex, value: currentValue });
  return accumulator;
}, []);
console.log(result);
