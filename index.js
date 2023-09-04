import { footer,header,load } from "./component/load.js"

document.getElementById("footerdiv").innerHTML=footer()
document.getElementById("homeloader").innerHTML=load()
document.getElementById("homehead").innerHTML=header()
let stro=JSON.parse(localStorage.getItem("user"))
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

const logout=(e)=>{
    e.preventDefault()
    document.querySelector(".carticon").style.display="none"
    document.getElementById("signup").style.display="block"
    document.getElementById("login").style.display="block"
    document.getElementById("logout").style.display="none"
    document.getElementById("profile").style.display="none"
    document.querySelector("aside").style.display="none"
    localStorage.removeItem("signup")

}
document.getElementById("logout").addEventListener("click",logout)

// const logout=()=>{
//     document.getElementById("signup").style.display="block"
//     document.getElementById("login").style.display="block"
//     document.getElementById("logout").style.display="none"
//     localStorage.removeItem("stro")
// }
// document.getElementById("logout").addEventListener("click",logout)

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

<<<<<<< HEAD



=======
>>>>>>> 3cb21b1173b3fa521793e7b9fe947c289928b459
let ig =document.querySelector(".loader-one")
console.log(ig);

window.addEventListener("load",()=>{
    ig.style.display="none"
    
})


<<<<<<< HEAD

=======
>>>>>>> 3cb21b1173b3fa521793e7b9fe947c289928b459
const get=()=>{
    fetch(" http://localhost:3000/cart")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data.length);
        let dat=data.length
            if(data.length>0){
                document.querySelector(".cart-s").innerHTML=dat
            }
            else{
                document.querySelector(".cart-s").style.display="none"
            }
    })
}


get()
// setInterval(chengimg,1000)
