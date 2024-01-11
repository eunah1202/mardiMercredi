// 모바일 햄버거메뉴
 const mobBtnOpen = document.querySelector(".mobBtn_open");
 const mobBtnClose = document.querySelector(".mobBtn_close")
 const mob = document.querySelector(".mob");
 const body = document.querySelector("body");
 const bg = document.querySelector(".bg");

  mobBtnOpen.addEventListener("click",e=>{
  e.preventDefault();
  mob.classList.add("on");
  body.classList.add("on");
  bg.classList.add("on");
 });

 mobBtnClose.addEventListener("click",e=>{
  e.preventDefault();
  mob.classList.remove("on");
  body.classList.remove("on");
  bg.classList.remove("on");

 });

 const mob_gnb = document.querySelectorAll(".mob_gnb>ul:first-of-type>li")//4
 for(let i = 0; i<mob_gnb.length; i++){
  mob_gnb[i].addEventListener("click",e=>{
    e.preventDefault();
    mob_gnb.forEach(element => {
      element.classList.remove("on");
    });
    e.currentTarget.classList.add("on");
  });
 };