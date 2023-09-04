<<<<<<< HEAD

import { footer, header, load } from "/component/load.js"
document.getElementById("produloder").innerHTML=load()
document.getElementById("footerprodu").innerHTML=footer()
document.getElementById("producthead").innerHTML=header()
=======
// import { prohead } from "../component/load"
import { footer, load,prohead } from "/component/load.js"
document.getElementById("produloder").innerHTML=load()
document.getElementById("footerprodu").innerHTML=footer()
document.getElementById("producthead").innerHTML=prohead()
>>>>>>> 3cb21b1173b3fa521793e7b9fe947c289928b459
let sing=localStorage.getItem("sing")
let products=[]
let sign=localStorage.getItem("signup")
console.log(sign);
if(sign){
    document.getElementById("signup").style.display="none"
    document.getElementById("login").style.display="none"
    document.getElementById("logout").style.display="block"
    document.querySelector(".carticon").style.display="block"
}
if(!(sign)){
    document.getElementById("signup").style.display="block"
    document.getElementById("login").style.display="block"
    document.getElementById("logout").style.display="none"
    document.getElementById("profile").style.display="none"
    document.querySelector(".carticon").style.display="none"
    
}
const serch=()=>{
    let value=document.getElementById("serch").value
    let stro=products.filter((ele)=>ele.title.toLowerCase().match(value.toLowerCase()))
    product(stro)
 
}

document.getElementById("serch").addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){
        serch()
    }
})
document.getElementById("serch").addEventListener("input",()=>{
    serch()
})
 
const product=(data)=>{
    document.querySelector(".claa").innerHTML=""
    data.map((ele)=>{
        let div1=document.createElement("div")
        div1.setAttribute("class","div1 padding-0")

        div1.setAttribute("id","hover")
        let img=document.createElement("img")
        img.src=ele.img
        img.setAttribute("class","img")
        img.setAttribute("id",`img${ele.id}`)
        let overly=document.createElement("div")
        overly.setAttribute("class","overly-product")
        div1.append(img,overly)

        let btnshop=document.createElement("button")
        btnshop.innerHTML="Shop now"
        btnshop.setAttribute("class","btnshop")
        btnshop.addEventListener("click",()=>{
            console.log(ele.id);
            localStorage.setItem("product",ele.id)
            window.location.href="/Page/show.html"
        })
        overly.append(btnshop)
        let content=document.createElement("div")
        content.setAttribute("class","content")
         
        let title=document.createElement("h3")
        title.innerHTML=ele.title
        let price=document.createElement("h2")
        price.innerHTML=`₹${ele.price}`
        content.append(title,price)

        
        let row=document.createElement("div")
        row.setAttribute("class","class")
        let col=document.createElement("div")
        col.setAttribute("class"," col-xl-3 col-lg-3  col-md-2 col-sm-2  ")
        row.append(col)
<<<<<<< HEAD
        let div=document.createElement("div")
        div.setAttribute("class","productd ")
        div.append(div1,content)
        col.append(div)
=======
        col.append(div1,content)
>>>>>>> 3cb21b1173b3fa521793e7b9fe947c289928b459
        document.querySelector(".claa").append(col)
    })
}
document.getElementById("lth").addEventListener("click",()=>{
    let lth=products.sort((a,b)=>a.price-b.price)
    console.log(lth);
    product(lth)
})
document.getElementById("htl").addEventListener("click",()=>{
    let htl=products.sort((a,b)=>b.price-a.price)
    console.log(lth);
    product(htl)
})
document.getElementById("all").addEventListener("click",()=>{
    product(get())
})

let ig =document.querySelector(".loader-one")
console.log(ig);
<<<<<<< HEAD
=======

window.addEventListener("load",()=>{
    ig.style.display="none"
    
})
>>>>>>> 3cb21b1173b3fa521793e7b9fe947c289928b459

window.addEventListener("load",()=>{
    ig.style.display="none"
    
})

const get =()=>{
    fetch(`http://localhost:3000/product`)
    .then((res)=>res.json())
    .then((data)=>{
        product(data)
        
    })
}
const cartget=()=>{
    fetch("http://localhost:3000/cart")
    .then((res)=>res.json())
    .then((data)=>{
        let dat=data.length
<<<<<<< HEAD
        products=data
=======
>>>>>>> 3cb21b1173b3fa521793e7b9fe947c289928b459
        if(data.length>0){
            document.querySelector(".cart-s").innerHTML=dat
        }
        else{
            document.querySelector(".cart-s").style.display="none"
        }
    })
}
cartget()
get()
