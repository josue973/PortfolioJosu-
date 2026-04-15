// Array de objetos com os projetos
const projetos = [
  {
    titulo: "Projeto 01 - Conversor de Moedas",
    descricao: "Ferramenta que converte valores entre diferentes moedas (com valores fixos ou via API).",
    link: "#"
  },
  {
    titulo: "Projeto 02 - Jogo da Velha (Tic-Tac-Toe)",
    descricao: "Implementação interativa para jogar contra outro usuário.",
    link: "#"
  },
  
];

// Seleciona o container
const listaProjetos = document.getElementById("lista-projetos");

// Renderiza dinamicamente os projetos
projetos.forEach(projeto => {
  const article = document.createElement("article");

  const h3 = document.createElement("h3");
  h3.textContent = projeto.titulo;

  const p = document.createElement("p");
  p.textContent = projeto.descricao;

  const a = document.createElement("a");
  a.href = projeto.link;
  a.textContent = "Ver no GitHub";

  article.appendChild(h3);
  article.appendChild(p);
  article.appendChild(a);

  listaProjetos.appendChild(article);
});
