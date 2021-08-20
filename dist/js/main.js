    const header=document.querySelector('.navbar');
    const navbar=document.querySelector('.navbar__menu');
    const toggle=document.querySelector('#mobile-menu');
    
    window.addEventListener('scroll',()=>{
    const scrollPos=window.scrollY;
    const scrollMin=window.scrollX;
    if (scrollPos > 10) {
        header.classList.add('scrolled')
        
    } else {
        
        header.classList.remove('scrolled')
    }
    
    
})

toggle.addEventListener('click',()=>{
    navbar.classList.toggle('active')
    toggle.classList.toggle('active')
})


    
