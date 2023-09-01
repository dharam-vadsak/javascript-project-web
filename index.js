
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

