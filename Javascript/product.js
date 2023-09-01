
let sing=localStorage.getItem("sing")
const product=(data)=>{
    data.map((ele)=>{
        let div1=document.createElement("div")
        div1.setAttribute("class","div1")

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
            // localStorage.setItem("product",JSON.stringify(ele))
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
        row.setAttribute("class","row")
        let col=document.createElement("div")
        col.setAttribute("class"," col-xl-3 col-lg-3  col-md-2 col-sm-2 padding-0 border")
        row.append(col)
        col.append(div1,content)
        document.querySelector(".row").append(col)
    })
}



const get =()=>{
    fetch(`http://localhost:3000/product`)
    .then((res)=>res.json())
    .then((data)=>{
        product(data)
    })
}
get()
