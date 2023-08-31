
let sing=localStorage.getItem("sing")
const product=(data)=>{
    data.map((ele)=>{
        let div1=document.createElement("div")
        div1.setAttribute("class","div1")
        // div1.addEventListener("mousemove",()=>{
        //     let img=document.querySelector(".img")
        //     let div=document.getElementById("hover")
        //     let clientX=Event.clientX=div.offsetLeft
        //     let clientY=Event.clientY=div.offsetTop

        //     let mwidth=div.offsetWidth
        //     let mheight=div.offsetHeight

        //     clientX=clientX/ mwidth *100
        //     clientY=clientY/ mheight *100
        //     console.log(clientX);
        //     // img.style.transform="translate(-0%,0%) scale(2)"
        //     img.style.transform="translate(-"+clientX+"%,-"+clientY+"%) scale(2)"
        // })
        // div1.addEventListener("mouseleave",()=>{
        //     img.style.transform="translate(-0%,-0%) scale(1)"

        // })
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
            localStorage.setItem("product",JSON.stringify(ele))
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

        // let div2=document.createElement("div")
        // div2.setAttribute("class","row subimg justify-content-center")
        // let imgone=document.createElement("img")
        // imgone.src=ele.imgone
        // imgone.addEventListener("click",()=>{
        //     let imgst=imgone.src
        //     // console.log(ele.id);
        //     document.querySelector(`#img${ele.id}`).src=imgst
        // })
        // imgone.setAttribute("class","imgone")
        // let imgtwo=document.createElement("img")
        // imgtwo.src=ele.img
        // imgtwo.addEventListener("click",()=>{
        //     let imgst=imgtwo.src
        //     // console.log(ele.id);
        //     document.querySelector(`#img${ele.id}`).src=imgst
        // })
        // imgtwo.setAttribute("class","imgtwo")

        // let imgthree=document.createElement("img")
        // imgthree.src=ele.img

        // imgthree.addEventListener("click",()=>{
        //     let imgst=imgtwo.src
        //     console.log(ele.id);
        //     document.querySelector(`#img${ele.id}`).src=imgst
        // })
        // imgtwo.setAttribute("class","imgthree")
        // div2.append(imgone,imgtwo,imgthree)

        // let div3=document.createElement("div")
        // div3.setAttribute("class","div3")

        // let title=document.createElement("h2")
        // title.innerHTML=ele.title
        // let price=document.createElement("h1")
        // price.innerHTML=`₹ ${ele.price}`
        // div3.append(title,price)
        // let div=document.createElement("div")
        // div.setAttribute("class","productdiv")
        // div1.addEventListener("click",()=>{
        //     localStorage.setItem("product",JSON.stringify(ele))
        //     window.location.href="/Page/show.html"
        // })

        // let div4=document.createElement("div")
        // div4.setAttribute("class","div4")

        // let add=document.createElement("button")
        // add.innerHTML="add to cart"
        // add.setAttribute("class","addtocart")
        // div4.append(add)
        // add.addEventListener("click",()=>{
        //     // e.preventDefault()
        //     if(sing){
        //         fetch(` http://localhost:3000/cart?id=${ele.id}`)
        //         .then((res)=>res.json())
        //         .then((data)=>{
        //             if(data.length>0){
        //                 data[0].qyt=data[0].qyt+1
        //                 fetch(`http://localhost:3000/cart/${data[0].id}`,{
        //                     method:"PATCH",
        //                     headers:{"content-type":"application/json"},
        //                     body:JSON.stringify(...data)
        //                 })
        //             }
        //             else{
        //                 fetch(`http://localhost:3000/cart`,{
        //                     method:"POST",
        //                     headers:{"content-type":"application/json"},
        //                     body:JSON.stringify({...ele,qyt:1})
        //                 })
        //             }
        //         })
        //     }
        //     else{
        //         alert("Plz signup || loging")
        //     }
        // })
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
