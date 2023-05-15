burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.nav-list');
rightnav = document.querySelector('.rightNav');

burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-classresp');
    navlist.classList.toggle('v-classresp');
    navbar.classList.toggle('h-navresp');

})