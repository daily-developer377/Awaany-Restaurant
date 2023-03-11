const btn = document.querySelector(".js-chat");
const chatBox = document.querySelector(".js-chatbox");
const form = document.querySelector(".js-chatbox__form");

btn.addEventListener("click", () => {
  chatBox.classList.toggle("chatbox--is-visible");

  if (chatBox.classList.contains("chatbox--is-visible")) {
    btn.innerHTML = '<i class="fa fa-times-circle" aria-hidden="true"></i>';
  } else {
    btn.innerHTML = '<img src="images/chatbox.png" class="img-fluid" alt="">';
  }
});

form.addEventListener("submit", e => {
  e.preventDefault();
})