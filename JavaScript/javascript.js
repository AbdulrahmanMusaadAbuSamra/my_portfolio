const hamburgerIcon = document.querySelector('.fa-bars');
const navMenu = document.querySelector('nav ul');

hamburgerIcon.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

document.addEventListener('click', (event) => {
  // التحقق ما إذا كان العنصر الذي تم النقر عليه ليس جزءًا من القائمة
  if (!navMenu.contains(event.target) && navMenu.classList.contains('active') && event.target !== hamburgerIcon) {
    navMenu.classList.remove('active');
  }
});






let section = document.querySelector(".section-4")
let spans = document.querySelectorAll(".line-out  span")

window.onscroll = function (){
    if (window.scrollY >= section.offsetTop ) {
        spans.forEach((span) => {{
            span.style.width = span.dataset.width
        }})
    }
}

function moveToNextInput(event) {
    if (event.keyCode === 18){
        let nextInput = event.target.nextElementSibling;
        if (nextInput) {
            nextInput.focus();
        }
    }
}