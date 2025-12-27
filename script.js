const chatPopup = document.getElementById("chat-popup");

/* SHOW POPUP WHEN SCROLL NEAR BOTTOM */
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;

  if (scrollPosition > pageHeight * 0.8) {
    chatPopup.classList.add("active");
  } else {
    chatPopup.classList.remove("active");
  }
});

/* FORMSPREE SUBMIT */
const form = document.getElementById("chat-form");
const successMsg = document.getElementById("success-msg");

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
  }, 2000);
});
