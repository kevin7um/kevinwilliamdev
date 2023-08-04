
// // AOS Animation -------------------
AOS.init({
    offset: 120, 
    delay: 300, 
    duration: 700,
    once: true,
});
//------------------

// SCROLL HEADER ----------------------------------------
const header = document.getElementById('js-header');

function fixedMenu(){
    if(window.pageYOffset > 80){
        header.classList.add('fixed-menu');
    }else{
        header.classList.remove('fixed-menu');
    }
}

document.addEventListener('scroll', fixedMenu);

//-------------------------

// MENU MOBILE -----------------
const btnMenuMobile = document.getElementById('js-btnMenuMobile');

console.log(btnMenuMobile)

function removeMenu(){
    btnMenuMobile.classList.remove('is-active')
    document.documentElement.classList.remove('menuOpened')
}

btnMenuMobile.addEventListener('click', () => {
    btnMenuMobile.classList.toggle('is-active')
    document.documentElement.classList.toggle('menuOpened')
});

// -----------------------------

// NAVEGAÇÃO ENTRE LINKS INTERNOS --------------------------
const linksSection = document.querySelectorAll('.js-nav-menu li a');

function scrollToSection(event){
    // event.preventDefault();

    const href = event.currentTarget.getAttribute('id');
    const section = document.querySelector(href);

    const initialPosition = section.offsetTop;

    var start = null;
    var target = initialPosition;
    var duration = 1000; // Tempo de duração do scroll em milissegundos
    
    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = timestamp - start;
      var scrollTop = window.pageYOffset;
      var scrollDistance = target - scrollTop;
      var scrollPosition = scrollTop + (scrollDistance * progress / duration);
      window.scrollTo(0, scrollPosition);
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
    
    removeMenu()
}

linksSection.forEach(link => {
    link.addEventListener('click', scrollToSection);

})
// ------------------------------------