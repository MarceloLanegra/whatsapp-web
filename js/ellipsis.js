import "./clamp-min.js";

function calClamp(width) {

  const ellipsis = document
    .querySelector(".chat-contact-message-list")
    .querySelectorAll(".contact-message-text");

  ellipsis.forEach((mensaje) => {
    if (width <= 992) {
      $clamp(mensaje, { clamp: 2 });
    } else {
      $clamp(mensaje, { clamp: 1 });
    }
  });
}

window.addEventListener("load",()=>{
  const width = window.innerWidth
  calClamp(width)
});

window.addEventListener('resize', ()=>{
  const width = window.innerWidth;
  calClamp(width)
})