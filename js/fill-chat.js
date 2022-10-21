import { chatsInfo } from "./chat.js";

export function fillChats(){
    const $nombreContactoChat = document.querySelector(".user-name");
    const $status = document.querySelector(".user-status");
    const $photo = document
      .querySelector(".chat-message-list")
      .querySelector(".user")
      .querySelector("img");
    const $chatItem = document.querySelectorAll(".contact-message-item");
    
    $chatItem.forEach(($item, index) => {
      let $nombreContacto = $item
        .querySelector(".contact-name")
        .querySelector("span");
    
      $nombreContacto.innerHTML = chatsInfo[index].contact_name;
    
      $item.addEventListener("click", () => {
        const $image = $item.querySelector("img").src;
        $photo.src = `${$image}`;
        $nombreContactoChat.innerHTML = $nombreContacto.innerHTML;
        $status.innerHTML = chatsInfo[index].status;
      });
    });
}