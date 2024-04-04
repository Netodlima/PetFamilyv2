if (localStorage.getItem("token") == null) {
  alert("Você precisa estar logado para acessar essa página");
  window.location.href = "signup.html";
}

const fontImport = document.createElement('link');
fontImport.href = 'https://fonts.googleapis.com/css2?family=Poppins&display=swap';
fontImport.rel = 'stylesheet';

document.head.appendChild(fontImport);

const userLogado = JSON.parse(localStorage.getItem("userLogado"));

const logado = document.querySelector("#logado");
if (logado) {
  logado.innerHTML = `Olá ${userLogado.nome}`;
  logado.classList.add("assets/css/logado-style.css");
  logado.style.color = "black";
  logado.style.fontSize = "20px";
  logado.style.fontFamily = "'poppins', sans-serif";
}

function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "signup.html";
}
