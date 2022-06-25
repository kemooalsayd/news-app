let btn = document.getElementById("burger"),
  ul = document.getElementById("ul");
btn.onclick = () => {
  ul.classList.toggle("re");
};
c=document.getElementById("c")

fetch(
  "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=6ac2d625f383415db31cd73e103cbd99"
).then((res) => res.json()).then((data)=>{
    data.articles.forEach(el => {
        console.log(el)



        let m=`
        <div><img src="${el.urlToImage}"></div>
        <div>
            <h1>${el.title}</h1>
            <p>${el.description}</p>
            <hr>
            <div>
            <small>${el.author}</small>
            <a href="${el.url}">go</a>
            </div>
        </div>
   `
        j=document.createElement("div");
        j.setAttribute("class", "j");
        j.innerHTML=m
        c.appendChild(j)
    });
});
