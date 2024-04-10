console.log("...API Started")
function callApi(){
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=f889a2fa961d4995abc230dfe75b0f63")
    .then((res)=>{
        return res.json()
    
    })
    .then((data)=>{
        renderUI(data)
    
    })

}
const root =  document.getElementById("root")
function renderUI(data){
    const articles = data.articles
   
    for(let i=0;i<articles.length;i++){
    const ar = articles[i]
    const div= document.createElement("div")
      
    
    div.setAttribute("class","news-card")
    const h3 = document.createElement("h3")
    h3.innerText = ar.title
    div.appendChild(h3)
    const img = document.createElement("img")
    img.src = ar.urlToImage
    
    div.appendChild(img)
    root.appendChild(div)
    }
}
callApi()