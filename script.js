var carta1 = {
  nome: "Branca de Neve",
  imagem: "https://i.pinimg.com/236x/ee/1d/a9/ee1da9c70f895388918463609de77df6.jpg",
  atributos: {  
    Simpatia: 1700,
    Determinação: 1500,
    velocidade: 85,    
  }
};

var carta2 = {
  nome: "Cinderela",
  imagem: "https://i.pinimg.com/originals/c7/9b/46/c79b4626c95e81ee6c958a2dd89136f0.png",
  atributos: {
    Simpatia: 1500,
    Determinação: 1200,
    velocidade: 85,     
  }
};

var carta3 = {
  nome: "Aurora",
  imagem: "https://i.pinimg.com/736x/e2/62/ae/e262ae260242faac6b675c9b61fb8888--princess-aurora-disney-princess.jpg",
  atributos: {
    Simpatia: 1000,
    Determinação: 1600,
    Heroísmo: 81,     
  }
};

var carta4 = {
  nome: "Ariel",
  imagem: "https://i.pinimg.com/236x/46/88/f6/4688f6ba640f060c7a7f769a89fde647.jpg",
  atributos: {
    Simpatia: 1300,
    Determinação: 1000,
    Heroísmo: 72,      
  }
};

var carta5 = {
  nome: "Bela",
  imagem: "https://i.pinimg.com/236x/92/97/6a/92976ac8114d4df0b7ba9f5f35f30c81.jpg",
  atributos: {
    Simpatia: 1100,
    Determinação: 1400,
    Heroísmo: 65,
    
  }
};

var carta6 = {
  nome: "Jasmine",
  imagem: "https://i.pinimg.com/236x/38/87/e0/3887e0f774b94e6aaf22551589656ce5.jpg",
  atributos: {
    Simpatia: 2000,
    Determinação: 1000,
    Heroísmo: 66,
  }
};

// Agrupado as cartas criadas acima //
var cartas = [carta1, carta2, carta3, carta4, carta5, carta6]
var cartaMaquina;
var cartaJogador;

// Função para sortear as cartas entre máquina e jogador //
function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 6);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 6);
  while (numeroCartaMaquina == numeroCartaJogador) {
      numeroCartaJogador = parseInt(Math.random() * 6);
  }
   
  cartaJogador = cartas[numeroCartaJogador];
 

 //Comando para disabilitar botao sortear e habilitar botao jogar após sortear carta
 document.getElementById("btnSortear").disabled = true;
 document.getElementById("btnJogar").disabled = false;

 //Comando para executar função seguinte de exibir opções assim que função de sorteio for executada
 exibirCartaJogador();
}

// Função para obter seleção de atributo, caso ele esteja marcado (checked)
function obtemAtributoSelecionado() {
 var radioAtributos = document.getElementsByName("atributo");

 for (var i = 0; i < radioAtributos.length; i++) {
   if (radioAtributos[i].checked == true) {
     return radioAtributos[i].value;
   }
 }
}

// Função para habilitar botao jogar e exibir o resultado final
function jogar() {
 var atributoSelecionado = obtemAtributoSelecionado();
 var divResultado = document.getElementById("resultado");
 var botaoJogarNovamente = document.getElementById("btnResetar");

 //Condição para carta do jogador ser maior, menor ou igual à carta da máquina e exibir mensagem na tela

 if (atributoSelecionado == undefined || atributoSelecionado == null) {
  alert("Favor selecionar um atributo para jogar!"); // Alertar o Jogar selecionar uma opção
  obtemAtributoSelecionado()
}
 else if (
   cartaJogador.atributos[atributoSelecionado] >
   cartaMaquina.atributos[atributoSelecionado]
 ) {
   htmlResultado = "<p class='resultado-final'> Você me venceu!!!</p>";
 } else if (
   cartaJogador.atributos[atributoSelecionado] <
   cartaMaquina.atributos[atributoSelecionado]
 ) {
   htmlResultado =
     "<p class='resultado-final'> Minha carta foi maior que a sua!</p>";
 } else {
   htmlResultado = "<p class='resultado-final'> Empatamos nessa!!</p>";
 }
 divResultado.innerHTML = htmlResultado;

 document.getElementById("btnJogar").disabled = true;
 document.getElementById("btnResetar").disabled = false;

 exibirCartaMaquina();
}

// Função para exibir carta do jogador, com sua respectiva moldura, nome e atributos
function exibirCartaJogador() {
 var divCartaJogador = document.getElementById("carta-jogador");
 divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
 var moldura =
   '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
 var tagHTML = "<div id='opcoes' class='carta-status'>";

 var opcoesTexto = "";
 for (var atributo in cartaJogador.atributos) {
   opcoesTexto +=
     "<input type='radio' name='atributo' value='" +
     atributo +
     "'>" +
     atributo +
     " " +
     " - " +
     cartaJogador.atributos[atributo] +
     "<br>";
 }
 var nome = `<p class="carta-subtitle">${cartaJogador.nome} </p>`;

 divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

// Função para exibir carta da máquina, com sua respectiva moldura, nome e atributos, com a diferença do tipo do atributo não ser radio e sim text
function exibirCartaMaquina() {
 var divCartaMaquina = document.getElementById("carta-maquina");
 divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
 var moldura =
   '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
 var tagHTML = "<div id='opcoes' class='carta-status'>";

 var opcoesTexto = "";
 for (var atributo in cartaMaquina.atributos) {
   opcoesTexto +=
     "<p type='text' name='atributo' value='" +
     atributo +
     "'>" +
     atributo +
     " " +
     " - " +
     cartaMaquina.atributos[atributo] +
     "</p>";
 }
 var nome = `<p class="carta-subtitle">${cartaMaquina.nome} </p>`;

 divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
function resetar() {
  var botaoJogar = document.getElementById("btnJogar");
  var botaoSortear = document.getElementById("btnSortear");
  var botaoResetar = document.getElementById("btnResetar");
  var elementoResultado = document.getElementById("resultado");
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = "";
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = "";
  divCartaJogador.innerHTML = "";
  divCartaMaquina.innerHTML = "";
  //cartaJogador = "0";
  //cartaMaquina = "0";
  elementoResultado.innerHTML = "";
  //card.innerHTML = "";
  //cardMaquina.innerHTML = "";

  
  botaoSortear.disabled = false;
  botaoJogar.disabled = true;
  botaoResetar.disabled = true;
}