//let data=fetch('https://makeup-api.herokuapp.com/api/v1/products.json')
//        .then(res=>res.json())
//        .then(data=>console.log(data))
//        .catch(error=>console.log(error))
let divroot = document.getElementById('root')

async function getdata(){

try{

let res=await fetch('https://makeup-api.herokuapp.com/api/v1/products.json')
let data=await res.json()
return data
}
catch(error){
console.log(error)
}
}
async function construct(){
    let data=await getdata()
    data.forEach(e => {
        let div=document.createElement('div')
        div.innerHTML=`<div class="card cardwrapper" style="width:18rem;">
        <img src="${e.image_link}" class="card-img-top" alt="${e.image_link.alt}">
        <div class="card-body">
        <h6 class="card-title">${e.product_link}</h6>
        <h1 class="card-text">Brand : ${e.brand}</h1>
        <h2 class="card-text">Name : ${e.name}</h2>
        <h3 class="card-text">price : ${e.price}</h3>
        <h6 class="card-text">${e.description}</h6>
        </div>
        </div>`
        divroot.appendChild(div)
    });
}
construct()



