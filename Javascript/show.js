import { footer, header} from "../component/load.js";
document.getElementById("showhead").innerHTML=header()
document.getElementById("footershow").innerHTML=footer()
let productstor=JSON.parse(localStorage.getItem("product"))
document.title=""
let signup=localStorage.getItem("signup")
if(signup){
    document.getElementById("homesign").style.display="none"
    document.getElementById("login").style.display="none"
    document.getElementById("logout").style.display="block"
    document.querySelector(".carticon").style.display="none"

}
let data=[]
data.push(productstor)
let qytco=data[0].qyt

const aa=(data)=>{
    
    data.map((ele)=>{
        document.title=ele.title 

        let imgdiv=document.createElement("div")
        imgdiv.setAttribute("class","imgdiv")
        


        let img=document.createElement("img")
        img.setAttribute("id",`mainimg`)
        img.src=ele.img
        let subimg=document.createElement("div")
        subimg.setAttribute("class","row sub")

        let imgbox1=document.createElement("img")
        imgbox1.setAttribute("id",`img1`)
        imgbox1.src=ele.imgone
        imgbox1.addEventListener("click",()=>{ 
            document.getElementById(`mainimg`).src=imgbox1.src
        })

        let imgbox2=document.createElement("img")
        imgbox2.setAttribute("id",`img2`)
        imgbox2.src=ele.imgtwo
        imgbox2.addEventListener("click",()=>{
            document.getElementById(`mainimg`).src=imgbox2.src
        })

        let imgbox3=document.createElement("img")
        imgbox3.setAttribute("id",`img3`)
        imgbox3.src=ele.imgthree
        imgbox3.addEventListener("click",()=>{
            document.getElementById(`mainimg`).src=imgbox3.src
        })
        let imgbox4=document.createElement("img")
        imgbox4.setAttribute("id",`img4`)
        imgbox4.src=ele.img
        imgbox4.addEventListener("click",()=>{
            document.getElementById(`mainimg`).src=imgbox4.src
        })
        subimg.append(imgbox1,imgbox2,imgbox3,imgbox4)
        imgdiv.append(img,subimg)


        let contetdiv=document.createElement("div")
        contetdiv.setAttribute("class","contetdiv")

        let title=document.createElement("h2")
        title.setAttribute("class","title-show")
        title.innerHTML=ele.title

        let description=document.createElement("p")
        description.setAttribute("class","description")
        description.innerHTML=ele.description

        let readbtn=document.createElement("button")
        readbtn.setAttribute("class","readmore")
        readbtn.innerHTML=`Read more <i class="fa-solid fa-chevron-down"></i>`
        readbtn.addEventListener("click",()=>{
            document.querySelector(".description").style.overflow="visible"
            document.querySelector(".readmore").style.display="none"
            document.querySelector(".description").style.height="auto"
            document.querySelector(".closemore").style.display="block"

        })

        let closemore=document.createElement("button")
        closemore.setAttribute("class","closemore")
        closemore.innerHTML=`close more <i class="fa-solid fa-angle-up"></i>`
        closemore.addEventListener("click",()=>{
            document.querySelector(".description").style.overflow="hidden"
            document.querySelector(".readmore").style.display="block"
            document.querySelector(".description").style.height="100px"
            document.querySelector(".closemore").style.display="none"
        })

        let addtocart=document.createElement("button")
        addtocart.innerHTML="add to cart"
        addtocart.setAttribute("class","addtocart")
        addtocart.addEventListener("click",()=>{
            if(signup){
            fetch(`http://localhost:3000/cart?id=${ele.id}`)
            .then((res)=>res.json())
            .then((data)=>{
                if(data.length>0){
                    alert("Product Already Added To Cart Page")
                    setInterval(()=>{
                        window.location.href="/Page/cart.html"
                    },1000)
                }
                else{
                    fetch(`http://localhost:3000/cart`,{
                        method:"POST",
                        headers:{"content-type":"application/json"},
                        body:JSON.stringify({...ele,qyt:1})
                    })
                    setInterval(()=>{
                        window.location.href="/Page/cart.html"
                    },1000)
                    alert("Product Added To Cart !")
                }
            })
        }else{
            alert("plz login || sing-up")
            window.location.href="/Page/sign.html"
        }
        })
        contetdiv.append(title,description,readbtn,closemore,addtocart)

        let row=document.createElement("div")
        row.setAttribute("class","row")
        let col=document.createElement("div")
        col.setAttribute("class","col-xl-12")
        row.append(col)
        let div=document.createElement("div")
        div.setAttribute("class","div")
        col.append(div)
        div.append(imgdiv,contetdiv)
        document.querySelector(".section").append(row)
    })
}


const get=()=>{
    fetch(`http://localhost:3000/product?id=${productstor}`)
    .then((res)=>res.json())
    .then((data)=>{
        aa(data)
        
    })
}

const cart=()=>{
    fetch("http://localhost:3000/cart")
    .then((res)=>res.json())
    .then((data)=>{
        let dat=data.length
        if(data.length>0){
            document.querySelector(".cart-s").innerHTML=dat
        }
        else{
            document.querySelector(".cart-s").style.display="none"
        }
    })
}
cart()
get()

// aa()