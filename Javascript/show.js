let productstor=JSON.parse(localStorage.getItem("product"))
let qytco=localStorage.getItem("qyt")
console.log(qytco);
let data=[]
data.push(productstor)
console.log(data);
console.log(productstor);

const aa=()=>{

    let img=document.createElement("img")
    img.src=productstor.img
    img.setAttribute("class","img-show")
    img.setAttribute("id",`img-show${productstor.id}`)
    let row=document.createElement("div")
    row.setAttribute("class","row")
    let col=document.createElement("div")
    col.setAttribute("class","col-xl-12")
    let div=document.createElement("div")
    div.setAttribute("class","div-show")
    let subimg=document.createElement("div")
    subimg.setAttribute("class","subimg-show row")
    let one=document.createElement("img")
    one.src=productstor.imgone
    one.addEventListener("click",()=>{
        let img=one.src
        document.getElementById(`img-show${productstor.id}`).src=img
    })


    let two=document.createElement("img")
    two.src=productstor.imgtwo
    two.addEventListener("click",()=>{
        
        let img=two.src
        console.log(img);
        
        document.getElementById(`img-show${productstor.id}`).src=img
    })
    let three=document.createElement("img")
    three.src=productstor.imgtwo
    subimg.append(one,two)
    three.addEventListener("click",()=>{

        let img=three.src
        console.log(img);

        document.getElementById(`img-show${productstor.id}`).src=img
    })
    subimg.append(one,two,three)

    div.append(img,subimg)


    let contetdiv=document.createElement("div")
    contetdiv.setAttribute("class","contetdiv-show")

    let title=document.createElement("h2")
    title.innerHTML=productstor.title


    let qty=document.createElement("div")
    qty.setAttribute("class","qyt flex")    
    let min=document.createElement("button")
    min.innerHTML=`<i class="fa-solid fa-minus"></i>`
    min.addEventListener("click",()=>{
        console.log(productstor.id);
        fetch(` http://localhost:3000/cart?id=${productstor.id}`)
        .then((res)=>res.json())
        .then((data)=>{
            if(data.length>0){
                data[0].qyt=data[0].qyt-1
                qytco=data[0].qyt
                localStorage.setItem("qyt", qytco)
                fetch(`http://localhost:3000/cart/${data[0].id}`,{
                    method:"PATCH",
                    headers:{"Content-type":"application/json"},
                    body:JSON.stringify(...data)
                })
            }
        })
    })

    let qtybox=document.createElement("p")
    qtybox.innerHTML=qytco

    let max=document.createElement("button")
    max.innerHTML=`<i class="fa-solid fa-plus"></i>`
    max.addEventListener("click",()=>{
        console.log(productstor.id);
        fetch(` http://localhost:3000/cart?id=${productstor.id}`)
        .then((res)=>res.json())
        .then((data)=>{
            if(data.length>0){
                data[0].qyt=data[0].qyt+1
                qytco=data[0].qyt
                localStorage.setItem("qyt", qytco)
                fetch(`http://localhost:3000/cart/${data[0].id}`,{
                    method:"PATCH",
                    headers:{"Content-type":"application/json"},
                    body:JSON.stringify(...data)
                })
            }
        })
    })

    qty.append(min,qtybox,max)
    let price=document.createElement("h4")
    price.setAttribute("class","price-show")
    price.innerHTML=`₹${productstor.price}`

    let addtocart=document.createElement("button")
    addtocart.setAttribute("class","addtocart")
    addtocart.innerHTML="add to cart"

    let des=document.createElement("p")
    des.innerHTML=productstor.description
    des.setAttribute("class","description")

    let read=document.createElement("button")
    read.setAttribute("class","readmor")
    read.innerHTML="read mor"
    read.addEventListener("click",()=>{
    document.querySelector(".description").style.overflow="visible"
    document.querySelector(".description").style.height="auto"
    document.querySelector(".readmor").style.display="none"
    document.querySelector(".readclose").style.display="block"      
    })

    let readclose=document.createElement("button")
    readclose.setAttribute("class","readclose")
    readclose.innerHTML="close read"
    readclose.addEventListener("click",()=>{
        document.querySelector(".description").style.overflow="hidden"
    document.querySelector(".description").style.height="100px"
    document.querySelector(".readmor").style.display="block"
    document.querySelector(".readclose").style.display="none" 
    document.querySelector(".readclose").style.transition="all 0.4s ease"
    })
    contetdiv.append(title,qty,price,addtocart,des,read,readclose)
    
    let maindiv=document.createElement("div")
    maindiv.setAttribute("class","maindiv-show")

    maindiv.append(div,contetdiv)
    
    row.append(col)
    col.append(maindiv)
    document.querySelector("section").append(row)
}


aa()