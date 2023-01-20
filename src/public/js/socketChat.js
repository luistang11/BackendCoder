const socket = io();
let name = document.getElementById("name");
let submit = document.getElementById("submit");
let message = document.getElementById("message");
let messages = document.getElementById("messages");

let newMessages = [];
let user = null;

if (!user) {
  Swal.fire({
    title: "Identificate",
    input: "text",
    text: "Nombre de usuario",
    allowOutsideClick: false,
    inputValidator: (value) => {
      return !value && "Necesitas escribir un nombre de usuario";
    },
  }).then((newUser) => {
    user = newUser.value;
    name.innerText = user;
    socket.emit("newUser", user);
  });
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const messageText = message.value.trim();
  message.value = "";
  const valueMessage={user,message:messageText}
  
  socket.emit("message", valueMessage);
});

socket.on("message", (data) => {
  console.log("Mensaje recibido: ", data);
  newMessages.push(data);
  imprimirMessages(newMessages);
});

function imprimirMessages(newMessages) {
  let _newMessages = "";
  for (const message of newMessages) {
    _newMessages += `${message.user}: ${message.message}\n`;
  }
  messages.innerText = _newMessages;
}
