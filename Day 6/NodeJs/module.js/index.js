// const figlet = require("figlet")
// figlet("Wolverine!",(err,data)=>{
//     console.log(data)
// })
// fetch('https://api.github.com/users/deepak3440')
//    .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log('Error Occured!')
// })

// console.log('End');



//async await :->
// if we want to await then the function should be async 
// async function getApi(){
//     console.log('Api calling....')
//     const pr = await fetch('https://api.github.com/Harshchaudhary10');
//     console.log('making json')
//     const data = await pr.json();
//     // console.log(data);
//     console.log('::fetched json')
// }
// getApi();
// console.log('end')
console.log('start')
async function callAPI(){
   const pr= new Promise((res,rej)=>{
    // console.log('promise started')
    setTimeout(()=>{
    //   console.log('Timeout 1...')
    res('done')
    },10000)
    })
    console.log('promise 1 complete')
    // const pr2 =new Promise((res,rej))
  }

callAPI()