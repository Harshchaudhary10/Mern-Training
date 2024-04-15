// const b = new Buffer.from('abcdefgh')
// console.log(b.toString())
// b.write('other')
// console.log(b.toString())
// const fs=require('fs')
// fs.writeFileSync('./logs.txt',"10th April 2024:Day 7")/
// const fs = require('fs')
// console.log('start')
// const data=fs.readFileSync('./myReadMe.txt',{encoding:'utf8'})
// const fsPromises = require('fs/promises')
// console.log('start')
// const pr=fsPromises.readFile('./myReadMe.txt',{encoding:'utf-8'})
// pr.then((res)=>{
//     console.log(res)
// })
// console.log('end')
// const fs = require('fs')
// fs.readFile('./myReadMe.txt',{encoding:'utf8'},(err,data)=>{
//     console.log(data)
// })
// CallBack in FileSystem
// const fs = require('fs');
// const data = fs.readFile('./read_me.txt', 'utf-8', (err,data)=>{
//     console.log(data);
// });




// https://www.amazon.com/products/electronics?pricelt=2000
//(protocol)  (origin)    (route_path)

// const http = require('http');
// const app = http.createServer((request,response)=>{
//     console.log('Request Recieved');
//     console.log(request.url);
// });
// app.listen(1400);
// put this url on browser :-> http://localhost:1400/abcd

// const http = require('http');
// const server = http.createServer((req,res)=>{
//     console.log('Request Recieved');
//     console.log(req.url);
//     res.writeHead(200,{
//         'content-type': 'text/html',
//     })
//     // res.end('<h2>hello!</h2>');
//     res.end()
// });
// server.listen(1400,()=>{
//     console.log('...server started...');
// })
// min- project
const http = require('http');
const fs = require('fs')
const data = fs.readFileSync('./data.json','utf8')
// const htmlTemplate = fs.readFileSync('./templates/page.html',{encoding:'utf8'})
// const cardTemplate = fs.readFileSync('./templates/card.html',{encoding:'utf8'})
const dataObj=JSON.parse(data)
const products= dataObj.products;
console.log(dataObj)
const htmlTemplate =`
<!DOCTYPE HTML>
<html>
    <head>
    <style>
    .product-card{
        max-width:500px;
        margin:20px auto;
        border: 3px double brown;
        border-radius: 8px;
        padding:16px;
    }
    </style>
    </head><body>__PRODUCTS_CARDS__</body>
</html>`
const cardTemplate=`<div class='product-card'>
<h4>__TITLE__</h4>
<img src="IMAGE_URL" alt="TITLE Image"> 
<p>___INFO__</p>
</div>`
// const card1 = cardTemplate
//                     .replace('__TITLE__',products[0].title)
//                     .replace('__INFO__',products[0].description)
// const card2 = cardTemplate
//                     .replace('__TITLE__',products[1].title)
//                     .replace('__INFO__',products[1].description)
// const card3 = cardTemplate
//                     .replace('__TITLE__',products[2].title)
//                     .replace('__INFO__',products[2].description)
// const allCards = card1 + card2 + card3
const allCards= products.map((elem)=>{
    let newCard = cardTemplate
    newCard = newCard.replace('__TITLE__',elem.title)
    newCard = newCard.replace('IMAGE_URL', elem.thumbnail);
    newCard = newCard.replace('__INFO__',elem.description)
    return newCard
}) 
// const allCardsString = allCards.join(' ')                   
const page =htmlTemplate.replace('__PRODUCTS_CARDS__',allCards)
// const server = http.createServer((req,res)=>{
//         console.log(req.url);
//         res.writeHead(200,{
//             'content-type': 'text/html',
//         })
//         res.end(page)
//     });
//     server.listen(1400,()=>{
//         console.log('...server started...');
//     })
// // //cd .. is used to comeback one directory.

// // //readfilesync
// // // we can write this line as=
// //  const fs = require('fs');
// // // const fs = require('node:fs');


// //  const data =fs.readFileSync('./myreadme.txt',{encoding:'utf-8'});
//  to change buffer into particular styring -----
//  one way is through encodinmg and second way is by using .toString()

//  convert buffer to sting= data.toString();
 console.log(data.toString());

console.log(data);


// /* Buffer(global) */

// //will give in hexadecimal.
const b= new Buffer.from('abc');
console.log(b);
console.log(b.toString());
b.write('other');
console.log(b.toString());


// write something in file
// const fs= require('fs');
fs.writeFileSync('./myreadme.txt',"10th April 2024:Day 7");






//  const fs = require('fs');
//  console.log("start");
// const data =fs.readFileSync('./myreadme.txt',{encoding:'utf-8'});
//  console.log(data);
//  console.log("end");


 //blocking and non blocking behaviour

//  const fsPromises = require('fs/promises');
//  console.log('start');
//   const pr=fsPromises.readFile('./myreadme.txt',{encoding:'utf-8'});
//   console.log(pr);
//   pr.then((res)=>{
    
//     console.log(res);
//   })
//   console.log('end');
//   console.log(pr);

//callback in filesystem

// const fs= require('fs');
// const data =fs.readFileSync('./myreadme.txt',{encoding:"utf-8"},(err,data)=>{
//     console.log(data);

// });
// harsh harsh harsh 


// http://localhost:1400/
// const http = require('http');
const app= http.createServer((req,res)=>{
    // console.log('Request Recieved');
    console.log(req.url);
    res.writeHead(200,{
        'content-type':'text/html',
    })
    res.end(page);
})
app.listen(1600,()=>{
    console.log('.....................server started.........');
}) //1000<=local host <=9999 




// const http = require('http');
// const fs=require('fs');
// const data=fs.readFileSync('./data.json','utf8');
// // convert json string into object in javascript
// const dataobj=JSON.parse(data);
// const products=dataobj.products;
// console.log(dataobj)
// const htmlTemplate=`<!DOCTYPE HTML>
// <html lang ="en">
//    <head>
//     </head>
//     <style>
//     .product-card{
//         max-width:500px;
//         margin:20px auto;
//         border:3px double brown;
//         border-radius:50%;
//         padding:16px;
//         display:felx;
//         justify-content:center;
//         text-align:center;
//         background-color:pink;

//     }
//     </style>
//      <body>
//           products_cards
//      </body>
          
// </html>

// `

// const cardTemplate=`
// <div class='product-card'>
// <h4>Title</h4>
// <p>Info</p>
// </div>`


// // const card1=cardTemplate.replace('Title',products[0].title)

// //                         .replace('Info',products[0].description );

 
// // const card2=cardTemplate.replace('Title',products[1].title)

// // .replace('Info',products[1].description );

// // const card3=cardTemplate.replace('Title',products[2].title)

// //                         .replace('Info',products[2].description );
// //   const allcards=card1+card2+card3;

// const allcards=products.map((elem)=>{
//     let newcard=cardTemplate;
//     newcard=newcard.replace('Title',elem.title);
//     newcard=newcard.replace('Info',elem.description);
//     return newcard;

// })


// const page=htmlTemplate.replace('products_cards',allcards)


// // const page=htmlTemplate.replace('products_cards',cardTemplate);



// const app= http.createServer((req,res)=>{
 
//     console.log(req.url);
//     res.writeHead(200,{ 'content-type':'text/html',
//     })
//     res.end(page);
// });
// app.listen(1600,()=>{
//     console.log('.....................server started.........');
// }) //1000<=local host <=9999 




// ---------------------------
//npx nodemon script


