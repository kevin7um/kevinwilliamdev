
// // AOS Animation -------------------
AOS.init({
    offset: 120, 
    delay: 100, 
    duration: 700,
    once: true,
});
//------------------

// // PRELOAD --------------------
//     const preload = document.getElementById('preload-js')
//     // document.documentElement.style.overflow = 'hidden';

//     window.addEventListener('load', () => {
//         setTimeout(() => {
//             preload.style.display = 'none';
//             // document.documentElement.style.overflow = 'scroll';

//         }, 1000);
//     })

// ------------------------------

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

// SCROLL PROJETOS ----------------
const btnScroll = document.getElementById('btn-scroll');
const sectionCases = document.getElementById('s-cases');

if(btnScroll){
    btnScroll.addEventListener('click', () => {
        window.scrollTo(0, sectionCases.offsetTop)
    });
}
//----------------------------------

// MENU MOBILE -----------------
const btnMenuMobile = document.getElementById('js-btnMenuMobile');

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
