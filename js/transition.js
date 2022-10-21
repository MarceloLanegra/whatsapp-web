export function transition(width) {
  const messageItem = document
    .querySelector(".contact-message-list")
    .querySelectorAll(".contact-message-item");

  const chat = document.querySelector(".chat-message-list");
  const buttonBack = document
    .querySelector(".chat-message-list")
    .querySelector(".header-primary")
    .querySelector("button");

    if (width>992){
        chat.removeAttribute("style");
    }

      messageItem.forEach((item) => {
        item.addEventListener("click", () => {
            if (width<=992){
                chat.style.transform = `translateX(-100%)`;
            }else{
                chat.removeAttribute("style");
            }
        });
      });
      buttonBack.addEventListener("click", () => {
        chat.style.transform = `translateX(0)`;
      });
}

window.addEventListener("load", () => {
  const width = window.innerWidth;
  transition(width);
});

window.addEventListener("resize", () => {
  const width = window.innerWidth;
transition(width)
});
