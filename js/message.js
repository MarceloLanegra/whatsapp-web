import { createDOM } from "./dom.js";
import { formatHour, timePeriod, formatMinutes } from "./format-hour.js";

function messageTemplate(message,hour,minutes,period) {
  return `
    <div class="message is-sender">
            <div class="message-body">
              <div class="message-text">
                ${message}
              </div>
            </div>
            <div class="message-details">
              <span class="message-date">${hour}:${minutes} ${period}</span>
              <span class="message-status is-delivered"></span>
            </div>
          </div>
    `;
}

function handleChat(event) {
  event.preventDefault();
}

export function newMessage() {

  const $chat = document.querySelector(".type");

  $chat.addEventListener("submit", () => {
    const $chatInput = $chat.querySelector("input");
    const $messageList = document.querySelector(".message-list");

    const hourSent = new Date().getHours();
    const minsSent = new Date().getMinutes();

    if ($chatInput.value !== ''){
        const $newMessage = createDOM(messageTemplate($chatInput.value,formatHour(hourSent),formatMinutes(minsSent),timePeriod(hourSent)));
    
        $messageList.prepend($newMessage);
        $chatInput.value = "";
    }
  });

  $chat.addEventListener("submit", handleChat);
}
