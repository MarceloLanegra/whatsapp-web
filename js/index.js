const $chats = [
  {
    contact_name: "Evelyn",
    status: "En línea",
  },
  {
    contact_name: "Tatiana",
    status: "Última vez a las 08:05 hrs",
  },
  {
    contact_name: "Marcelo",
    status: "En línea",
  },
  {
    contact_name: "Luis",
    status: "Última vez a las 08:05 hrs",
  },
  {
    contact_name: "Ammy",
    status: "Última vez a las 18:45 hrs",
  },
  {
    contact_name: "William",
    status: "En línea",
  },
  {
    contact_name: "Nero",
    status: "En línea",
  },
  {
    contact_name: "Daniela",
    status: "Última vez a las 14:25 hrs",
  },
  {
    contact_name: "Isabella",
    status: "Última vez a las 23:13 hrs",
  },
  {
    contact_name: "Catalina",
    status: "Última vez a las 13:25 hrs",
  },
  {
    contact_name: "Héctor",
    status: "Última vez a las 17:37 hrs",
  },
  {
    contact_name: "Giannina",
    status: "En línea",
  },
];

const $nombre = "Marcelo";
const $nom = document.querySelector(".user-name");
const $status = document.querySelector(".user-status");
const $photo = document
  .querySelector(".chat-message-list")
  .querySelector(".user")
  .querySelector("img");
const $chatItem = document.querySelectorAll(".contact-message-item");

$chatItem.forEach(($item, index)=>{
    let $nombreContacto = $item.querySelector(".contact-name").querySelector("span");

    $nombreContacto.innerHTML = $chats[index].contact_name

    $item.addEventListener("click", () => {
      const $image = $item.querySelector("img").src;
      $photo.src = `${$image}`;
      $nom.innerHTML = $nombreContacto.innerHTML
      $status.innerHTML = $chats[index].status;
    });
})