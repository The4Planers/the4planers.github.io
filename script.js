const chatBtn = document.getElementById("chat-btn");
const chatPopup = document.getElementById("chat-popup");
const form = document.getElementById("chat-form");
const successMsg = document.getElementById("success-msg");

chatBtn.onclick = () => {
  chatPopup.classList.toggle("active");
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);

  await fetch(form.action, {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" }
  });

  successMsg.innerText = "Message sent successfully ✅";
  form.reset();

  setTimeout(() => {
    successMsg.innerText = "";
    chatPopup.classList.remove("active");
  }, 2000);
});
