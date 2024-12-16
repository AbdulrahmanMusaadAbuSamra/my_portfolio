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