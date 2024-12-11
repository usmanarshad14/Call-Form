const form = document.querySelector("form");
const phoneInput = document.querySelector("#phone");
const messageInput = document.querySelector("#message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const callObj = {
    phone_number: phoneInput.value,
    message: messageInput.value,
  };

  sendCall(callObj.phone_number, callObj.message);
});

const sendCall = (phone, msg) => {
  const options = {
    method: "POST",
    headers: {
      authorization:
        "org_7a30328fcd2d895701820f8c7a6f844b0134c7b27e0d7a588cee7da4f4a4d948b52a886d19892b41171069",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phone_number: phone,
      task: msg,
    }),
  };

  fetch("https://api.bland.ai/v1/calls", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};
