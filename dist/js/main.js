let col=document.querySelectorAll(".moveseccol"),section=document.querySelector(".section"),boxs=document.querySelectorAll(".aboutbox"),about=document.querySelector(".about"),footerLink=document.querySelector("footer .last");footerLink.onclick=()=>{console.log("clicked"),window.scrollTo(section.offsetTop,0)},window.onscroll=function(){window.scrollY>=section.offsetTop-150&&col.forEach(o=>{o.classList.add("show-col")}),window.scrollY>=about.offsetTop-300&&boxs.forEach(o=>{o.classList.add("show-box-about")})};