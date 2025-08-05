console.log('Olá mundo!');

// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);

novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';

// Criando um elemento para exibir o relógio
let relogio = document.createElement('h2');
relogio.innerText = 'Carregando hora...';

// Estilizando o relógio
relogio.style.backgroundColor = 'black';
relogio.style.color = 'lime';
relogio.style.fontFamily = 'monospace';
relogio.style.padding = '20px';
relogio.style.textAlign = 'center';
relogio.style.width = '300px';
relogio.style.margin = '50px auto';
relogio.style.borderRadius = '10px';
relogio.style.boxShadow = '0 0 10px lime';

// Adicionando ao corpo da página
document.body.appendChild(relogio);

// Função para atualizar a hora
function atualizarRelogio() {
  const agora = new Date();
  const horas = agora.getHours().toString().padStart(2, '0');
  const minutos = agora.getMinutes().toString().padStart(2, '0');
  const segundos = agora.getSeconds().toString().padStart(2, '0');

  relogio.innerText = `${horas}:${minutos}:${segundos}`;
}

// Atualizar o relógio a cada segundo
setInterval(atualizarRelogio, 1000);

// Chamada inicial
atualizarRelogio();
