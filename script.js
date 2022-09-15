var carta1 = {
  nome: "Branca de Neve",
  imagem: "https://i.pinimg.com/236x/36/9e/6f/369e6f6bb444b8c225b430c41c33ba41.jpg",
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
  imagem: "https://i.pinimg.com/236x/36/9e/6f/369e6f6bb444b8c225b430c41c33ba41.jpg",
  atributos: {
    Simpatia: 1300,
    Determinação: 1000,
    Heroísmo: 72,      
  }
};

var carta5 = {
  nome: "Bela",
  imagem: "data:image/jpeg;base64,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",
  atributos: {
    Simpatia: 1100,
    Determinação: 1400,
    Heroísmo: 65,
    
  }
};

var carta6 = {
  nome: "Jasmine",
  imagem: "",
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
   htmlResultado = "<p class='resultado-final'> Você me venceu!</p>";
 } else if (
   cartaJogador.atributos[atributoSelecionado] <
   cartaMaquina.atributos[atributoSelecionado]
 ) {
   htmlResultado =
     "<p class='resultado-final'> Minha carta foi maior que a sua!</p>";
 } else {
   htmlResultado = "<p class='resultado-final'> Empatamos nessa!</p>";
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