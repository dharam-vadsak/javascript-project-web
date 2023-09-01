
let stro=JSON.parse(localStorage.getItem("user"))
let sign=localStorage.getItem("signup")
if(sign){
    document.getElementById("signup").style.display="none"
    document.getElementById("login").style.display="none"
    document.getElementById("logout").style.display="block"
}


const logout=()=>{
    document.getElementById("signup").style.display="block"
    document.getElementById("login").style.display="block"
    document.getElementById("logout").style.display="none"
    localStorage.removeItem("stro")
}
document.getElementById("logout").addEventListener("click",logout)

const users=()=>{
    console.log(stro);
    let img=document.createElement("img")
    img.src=stro.img
    img.setAttribute("id","userprofile")
    let first=document.createElement("h2")
    first.innerHTML=stro.first
    let name=document.createElement("p")
    name.innerHTML=stro.last
    let email=document.createElement("p")
    email.innerHTML=stro.email
    let div=document.createElement("div")
    div.append(img,first,name,email)
    div.setAttribute("class","singleuser")
    console.log(stro.last);
    document.getElementById("profilee").append(div)
}

users()

const DataTransfer=()=>{

    let img=document.createElement("img")
    img.src=stro.img
    document.getElementById("profile").append(img)
}
DataTransfer()

document.getElementById("profile").addEventListener("click",(e)=>{
    e.preventDefault()
    document.getElementById("user-profile").style.display="block"
})
document.getElementById("close").addEventListener("click",(e)=>{
    e.preventDefault()
    document.getElementById("user-profile").style.display="none"
})


// const chengimg=()=>{
//     let images=[
//         `url("../image/c-1.png")`,
//         `url("../image/c-2.png")`,
//         `url("../image/c-3.png")`,
//         `url("../image/c-4.png")`,
//         `url("../image/c-5.png")`,
//     ]
//     let img=document.querySelector(".loader-img")
//     let bg=images[Math.floor(Math.random*images.length)]
//     // console.log(bg);
//     console.log(img.style.backgroundimage=bg);
// }
// let images=[
//             `url("../image/c-1.png")`,
//             `url("../image/c-2.png")`,
//             `url("../image/c-3.png")`,
//             `url("../image/c-4.png")`,
//             `url("../image/c-5.png")`,
//         ]
let img =document.getElementById("image-loader")

// console.log(img);

let  imgs=["../image/c-1.png","../image/c-2.png","../image/c-3.png","../image/c-4.png"]
let set=setInterval(function(){
  let images=Math.floor(Math.random()*imgs.length)
//   console.log(images);
  img.src=imgs[images]
},600)

let loaderone=document.querySelector(".loader-one")
console.log(loaderone);

window.addEventListener("load",()=>{
    clearInterval(set)
    img.style.display="none"
    
})
// setInterval(chengimg,1000)
