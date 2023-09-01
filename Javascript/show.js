let productstor=JSON.parse(localStorage.getItem("product"))
console.log(productstor);
// let qytco=localStorage.getItem("qyt")
// console.log(qytco);
let data=[]
data.push(productstor)
let qytco=data[0].qyt




// const aa=()=>{

//     let img=document.createElement("img")
//     img.src=productstor.img
//     img.setAttribute("class","img-show")
//     img.setAttribute("id",`img-show${productstor.id}`)
//     let row=document.createElement("div")
//     row.setAttribute("class","row")
//     let col=document.createElement("div")
//     col.setAttribute("class","col-xl-12")
//     let div=document.createElement("div")
//     div.setAttribute("class","div-show")
//     let subimg=document.createElement("div")
//     subimg.setAttribute("class","subimg-show row")
//     let one=document.createElement("img")
//     one.src=productstor.img
//     one.addEventListener("click",()=>{
//         let img=one.src
//         document.getElementById(`img-show${productstor.id}`).src=img
//     })

//     let two=document.createElement("img")
//     two.src=productstor.imgtwo
//     two.addEventListener("click",()=>{
        
//         let img=two.src
//         console.log(img);
        
//         document.getElementById(`img-show${productstor.id}`).src=img
//     })
//     let three=document.createElement("img")
//     three.src=productstor.imgthree
//     subimg.append(one,two)
//     three.addEventListener("click",()=>{

//         let img=three.src
//         console.log(img);

//         document.getElementById(`img-show${productstor.id}`).src=img
//     })
//     let fo=document.createElement("img")
//     fo.src=productstor.imgone
//     fo.addEventListener("click",()=>{
        
//         let img=fo.src
//         console.log(img);
        
//         document.getElementById(`img-show${productstor.id}`).src=img
//     })
//     subimg.append(one,two,three,fo)

//     div.append(img,subimg)


//     let contetdiv=document.createElement("div")
//     contetdiv.setAttribute("class","contetdiv-show")

//     let title=document.createElement("h2")
//     title.innerHTML=productstor.title


//     let qty=document.createElement("div")
//     qty.setAttribute("class","qyt flex")    
//     let min=document.createElement("button")
//     min.innerHTML=`<i class="fa-solid fa-minus"></i>`
//     min.addEventListener("click",()=>{
//         console.log(productstor.id);
//         fetch(` http://localhost:3000/cart?id=${productstor.id}`)
//         .then((res)=>res.json())
//         .then((data)=>{
//             if(data.length>0){
//                 data[0].qyt=data[0].qyt-1
//                 // qytco=data[0].qyt
//                 localStorage.setItem("qyt", qytco)
//                 fetch(`http://localhost:3000/cart/${data[0].id}`,{
//                     method:"PATCH",
//                     headers:{"Content-type":"application/json"},
//                     body:JSON.stringify(...data)
//                 })
//             }
//         })
//     })

//     let qtybox=document.createElement("p")
//     qtybox.innerHTML=qytco

//     let max=document.createElement("button")
//     max.innerHTML=`<i class="fa-solid fa-plus"></i>`
//     max.addEventListener("click",()=>{
//         console.log(productstor.id);
//         fetch(` http://localhost:3000/cart?id=${productstor.id}`)
//         .then((res)=>res.json())
//         .then((data)=>{
//             if(data.length>0){
//                 data[0].qyt=data[0].qyt+1
//                 qytco=data[0].qyt
//                 localStorage.setItem("qyt", qytco)
//                 fetch(`http://localhost:3000/cart/${data[0].id}`,{
//                     method:"PATCH",
//                     headers:{"Content-type":"application/json"},
//                     body:JSON.stringify(...data)
//                 })
//             }
//         })
//     })

//     qty.append(min,qtybox,max)
//     let price=document.createElement("h4")
//     price.setAttribute("class","price-show")
//     price.innerHTML=`₹${productstor.price}`

//     let addtocart=document.createElement("button")
//     addtocart.setAttribute("class","addtocart")
//     addtocart.innerHTML="add to cart"

//     let des=document.createElement("p")
//     des.innerHTML=productstor.description
//     des.setAttribute("class","description")

//     let read=document.createElement("button")
//     read.setAttribute("class","readmor")
//     read.innerHTML="read mor"
//     read.addEventListener("click",()=>{
//     document.querySelector(".description").style.overflow="visible"
//     document.querySelector(".description").style.height="auto"
//     document.querySelector(".readmor").style.display="none"
//     document.querySelector(".readclose").style.display="block"      
//     })

//     let readclose=document.createElement("button")
//     readclose.setAttribute("class","readclose")
//     readclose.innerHTML="close read"
//     readclose.addEventListener("click",()=>{
//     document.querySelector(".description").style.overflow="hidden"
//     document.querySelector(".description").style.height="100px"
//     document.querySelector(".readmor").style.display="block"
//     document.querySelector(".readclose").style.display="none" 
//     document.querySelector(".readclose").style.transition="all 0.4s ease"
//     })
//     contetdiv.append(title,qty,price,addtocart,des,read,readclose)
    
//     let maindiv=document.createElement("div")
//     maindiv.setAttribute("class","maindiv-show")

//     maindiv.append(div,contetdiv)
    
//     row.append(col)
//     col.append(maindiv)
//     document.querySelector("section").append(row)
// }


// const aa=(data)=>{
//     data.map((ele)=>{

//             let img=document.createElement("img")
//             img.src=productstor.img
//             img.setAttribute("class","img-show")
//             img.setAttribute("id",`img-show${productstor.id}`)
//             let row=document.createElement("div")
//             row.setAttribute("class","row")
//             let col=document.createElement("div")
//             col.setAttribute("class","col-xl-12")
//             let div=document.createElement("div")
//             div.setAttribute("class","div-show")
//             let subimg=document.createElement("div")
//             subimg.setAttribute("class","subimg-show row")
//             let one=document.createElement("img")
//             one.src=productstor.img
//             one.addEventListener("click",()=>{
//                 // let img=ele.img
//                 document.getElementById(`img-show${productstor.id}`).src=ele.img
//                 console.log(img);
//             })
            
//             // subimg.append(one)
//             // let two=document.createElement("img")
//             // two.src=productstor.imgtwo
//             // two.addEventListener("click",()=>{
                
//             //     let img=ele.imgtwo
//             //     console.log(img);
                
//             //     document.getElementById(`img-show${productstor.id}`).src=img
//             // })
//             // let three=document.createElement("img")
//             // three.src=ele.imgthree
//             // three.addEventListener("click",()=>{
        
//             //     let img=ele.three
//             //     console.log(img);
        
//             //     document.getElementById(`img-show${productstor.id}`).src=img
//             // })
//             // let fo=document.createElement("img")
//             // fo.src=productstor.imgone
//             // fo.addEventListener("click",()=>{
                
//             //     let img=fo.src
//             //     console.log(img);
                
//             //     document.getElementById(`img-show${productstor.id}`).src=img
//             // })
        
//             div.append(img,subimg)
            
        
//             let contetdiv=document.createElement("div")
//             contetdiv.setAttribute("class","contetdiv-show")
            
//             let title=document.createElement("h2")
//             title.innerHTML=ele.title
//             contetdiv.append(title)
        
        
//             // let qty=document.createElement("div")
//             // qty.setAttribute("class","qyt flex")    
//             // let min=document.createElement("button")
//             // min.innerHTML=`<i class="fa-solid fa-minus"></i>`
//             // min.addEventListener("click",()=>{
//             //     console.log(productstor.id);
//             //     fetch(` http://localhost:3000/cart?id=${productstor.id}`)
//             //     .then((res)=>res.json())
//             //     .then((data)=>{
//             //         if(data.length>0){
//             //             data[0].qyt=data[0].qyt-1
//             //             // qytco=data[0].qyt
//             //             localStorage.setItem("qyt", qytco)
//             //             fetch(`http://localhost:3000/cart/${data[0].id}`,{
//             //                 method:"PATCH",
//             //                 headers:{"Content-type":"application/json"},
//             //                 body:JSON.stringify(...data)
//             //             })
//             //         }
//             //     })
//             // })
        
//             // let qtybox=document.createElement("p")
//             // qtybox.innerHTML=qytco
        
//             // let max=document.createElement("button")
//             // max.innerHTML=`<i class="fa-solid fa-plus"></i>`
//             // max.addEventListener("click",()=>{
//                 //     console.log(productstor.id);
//                 //     fetch(` http://localhost:3000/cart?id=${productstor.id}`)
//             //     .then((res)=>res.json())
//             //     .then((data)=>{
//             //         if(data.length>0){
//             //             data[0].qyt=data[0].qyt+1
//             //             qytco=data[0].qyt
//             //             localStorage.setItem("qyt", qytco)
//             //             fetch(`http://localhost:3000/cart/${data[0].id}`,{
//             //                 method:"PATCH",
//             //                 headers:{"Content-type":"application/json"},
//             //                 body:JSON.stringify(...data)
//             //             })
//             //         }
//             //     })
//             // })
        
//             // qty.append(min,qtybox,max)
//             // let price=document.createElement("h4")
//             // price.setAttribute("class","price-show")
//             // price.innerHTML=`₹${productstor.price}`
        
//             // let addtocart=document.createElement("button")
//             // addtocart.setAttribute("class","addtocart")
//             // addtocart.innerHTML="add to cart"
        
//             // let des=document.createElement("p")
//             // des.innerHTML=productstor.description
//             // des.setAttribute("class","description")
        
//             // let read=document.createElement("button")
//             // read.setAttribute("class","readmor")
//             // read.innerHTML="read mor"
//             // read.addEventListener("click",()=>{
//             // document.querySelector(".description").style.overflow="visible"
//             // document.querySelector(".description").style.height="auto"
//             // document.querySelector(".readmor").style.display="none"
//             // document.querySelector(".readclose").style.display="block"      
//             // })
        
//             // let readclose=document.createElement("button")
//             // readclose.setAttribute("class","readclose")
//             // readclose.innerHTML="close read"
//             // readclose.addEventListener("click",()=>{
//             // document.querySelector(".description").style.overflow="hidden"
//             // document.querySelector(".description").style.height="100px"
//             // document.querySelector(".readmor").style.display="block"
//             // document.querySelector(".readclose").style.display="none" 
//             // document.querySelector(".readclose").style.transition="all 0.4s ease"
//             // })
//             // contetdiv.append(title,qty,price,addtocart,des,read,readclose)

            
//             let maindiv=document.createElement("div")
//             maindiv.setAttribute("class","maindiv-show")
        
//             maindiv.append(div,contetdiv)
            
//             row.append(col)
//             col.append(maindiv)
//             document.querySelector("section").append(row)
        
//     })
// }

const aa=(data)=>{
    // console.log(data);
    data.map((ele)=>{
        // console.log(ele);


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
            // fetch(`http://localhost:3000/cart?id=${ele.id}`,{
            //     method:"POST",
            //     headers:{"content-type":"application/json"},
            //     body:JSON.stringify({...ele,qyt:1})
            // })
            // alert("PRODUCT ADD TO CART")
            // setInterval(()=>{
            //     window.location.href="/Page/cart.html"
            // },1000)

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
        document.querySelector("section").append(row)
    })
}


const get=()=>{
    fetch(`http://localhost:3000/product?id=${productstor}`)
    .then((res)=>res.json())
    .then((data)=>{
        aa(data)
    })
}
get()

// aa()