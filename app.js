const button = document.querySelector(".mark");
const counter = document.querySelector(".unreadCount p");
const unread = document.querySelectorAll(".unread");
counter.innerText = unread.length;

button.addEventListener("click", () => {
  unread.forEach((element) => {
    element.classList.remove("unread");
  });
  counter.innerText = "0";
});
