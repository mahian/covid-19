let bar = document.getElementById("bar");
let manu = document.getElementById("menu");

bar.addEventListener("click", (e)=>{
    if(manu.style.display != "block"){
        manu.style.display = "block";
    }else{
        manu.style.display = "none";
    }
});


window.addEventListener("scroll", ()=>{
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 1);
});