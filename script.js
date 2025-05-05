const lista = document.getElementById("lista");
const nome = document.getElementById("nome");
const quant = document.getElementById("quantidade");
const adc = document.getElementById("Adc");
const limpar = document.getElementById("Limpar");
const erro = document.getElementById("erro");
const copiar = document.getElementById("Copiar");
const modo = document.getElementById("modo");
const fundo = document.querySelector("section");
const h2 = document.querySelector("h2");
const header = document.querySelector("header");
const body = document.querySelector("body");
const imput = document.querySelector("li");
let escuro = false;

adc.addEventListener("click", function () {
  if (nome.value.trim() === "") {
    erro.textContent = 'Erro! Preencha o nome do produto !!!!';
  } else {
    if (quant.value.trim() === "") {
      quant.value = "1";
    }

    const nomes = nome.value.trim();
    const quants = quant.value.trim();
    const item = document.createElement("li");
item.onclick = () => item.classList.toggle('riscado');
    
    item.textContent = `${nomes} (${quants})`;
   

    lista.appendChild(item);

    nome.value = '';
    quant.value = '';
    erro.textContent = '';
  }
});

modo.addEventListener("click", function () {
  if (!escuro) {
    fundo.style.backgroundColor = "rgba(42, 42, 42, 0.85)";
    fundo.style.color = "#F3F3F3";
    h2.style.color = "#F3F3F3";
    header.style.backgroundColor = "rgba(42, 42, 42, 0.85)";
    header.style.color = "#F3F3F3";
    erro.style.color = "white";
    body.style.backgroundImage = "url(img/iwn4vy3mbr071.webp)";
    
    modo.textContent = "Modo Claro";
  } else {
    fundo.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    fundo.style.color = "#000000";
    h2.style.color = "#2A2A2A";
    
    header.style.backgroundColor = "rgba(243, 243, 243, 0.85)";
    header.style.color = "#2A2A2A";
    erro.style.color = "red";
    body.style.backgroundImage = "url(img/blog-cisslive-layout-de-supermercado.webp)";
    modo.textContent = "Modo Escuro";
  }
  escuro = !escuro;
});

copiar.addEventListener("click", function () {
  const itens = lista.querySelectorAll("li");
  if (itens.length === 0) {
    alert("A lista está vazia!");
    return;
  }

  const texto = Array.from(itens)
    .map(item => item.textContent)
    .join("\n");

  navigator.clipboard.writeText(texto)
    .then(() => alert("Lista copiada com sucesso!"))
    .catch(err => alert("Erro ao copiar: " + err));
});

limpar.addEventListener("click", function () {
  lista.innerHTML = '';
});

nome.addEventListener("click", function () {
  erro.textContent = '';
});

quant.addEventListener("click", function () {
  erro.textContent = '';
});
