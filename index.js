burger = document.querySelector('.burger')
header = document.querySelector('.header')
navList = document.querySelector('.nav-list')
burger.addEventListener('click',()=>{
  header.classList.toggle('.h-nav');
  navList.classList.toggle('.v-class');
})
