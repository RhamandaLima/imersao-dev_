var cartas1 = {
  nome: "Katniss",
  imagem: "http://3.bp.blogspot.com/-_R4zA-3Xc9s/VGygBxsBy8I/AAAAAAAAuU4/EJMoD0-Xq-0/s1600/Hunger%2BGames%2B3%2BMockingjay%2Bpart%2B1%2Bjennifer%2Blawrence%2Bkatniss%2Bfire%2Bmovie%2Bstill.jpg",
  atributos: {inteligencia: 98, habilidade: 85, sobrevivencia: 100}
};

var cartas2 = {
  nome: "Peeta",
  imagem:
    "https://www.atrevida.com.br/wp-content/uploads/2021/03/24299-josh-hutcherson-revela-possibilidade-de-viver-peeta-em-novo-filme-de-jogos-vorazes.jpg",
  atributos: {inteligencia: 82, habilidade: 92, sobrevivencia: 92}
};

var cartas3 = {
  nome: "Rue", imagem:
    "https://media.hollywood.com/images/638x425/1923514.jpg",
  atributos: {inteligencia: 78, habilidade: 94, sobrevivencia: 82}
};

var cartas4 = {
  nome: "Effie",
  imagem: "https://i.pinimg.com/originals/7e/88/72/7e8872a3c5a7fa61b2606a44ead83111.jpg",
  atributos: {inteligencia: 72, habilidade: 63, sobrevivencia: 60
  }
};

var cartas5 = {
  nome: "Haymich",
  imagem: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/15/47/1447947319-movies-hunger-games-haymitc-2.jpg",
  atributos: {inteligencia: 64, habilidade: 84, sobrevivencia: 82
  }
};

var cartas6 = {
  nome: "Alma Coin",
  imagem: "https://images6.fanpop.com/image/photos/37800000/-Alma-Coin-the-hunger-games-37848370-630-630.jpg",
  atributos: {inteligencia: 94, habilidade: 78, sobrevivencia: 85
  }
};

var cartas7 = {
  nome: "Gale",
  imagem: "http://pm1.narvii.com/6462/265c85e95b6438c19755fe57b0209e583f9a317d_00.jpg",
  atributos: {inteligencia: 78, habilidade: 85, sobrevivencia: 86
  }
};

var cartas8 = {
  nome: "Cressida",
  imagem: "https://i.redd.it/97097jrvy8m71.jpg",
  atributos: {inteligencia: 60, habilidade: 70, sobrevivencia: 83
  }
};

var cartas9 = {
  nome: "Beetee",
  imagem: "https://i.redd.it/ps96vu2qnm7z.jpg",
  atributos: {inteligencia: 99, habilidade: 96, sobrevivencia: 85
  }
};

var cartas10 = {
  nome: "Johanna Mason",
  imagem: "https://i.pinimg.com/736x/6a/4d/18/6a4d18b83e9f073e156a525d7f52b554--she-s-hunger-games-trilogy.jpg",
  atributos: {inteligencia: 78, habilidade: 86, sobrevivencia: 72
  }
};

var cartas11 = {
  nome: "Finnick",
  imagem: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2016/05/finnick-odair-jogos-vorazes.jpg",
  atributos: {inteligencia: 81, habilidade: 95, sobrevivencia: 81
  }
};

var cartas12 = {
  nome: "Prim",
  imagem: "https://pbs.twimg.com/media/CcOpYlKWEAAD1dR.jpg",
  atributos: {inteligencia: 72, habilidade: 80, sobrevivencia: 65
  }
};

var cartas13 = {
  nome: "Presidente Snow",
  imagem: "https://www.bitchmedia.org/sites/default/files/styles/facebook_ratio/public/open-graph/Donald%20Sutherland%20as%20President%20Coriolanus%20Snow%20in%20The%20Hunger%20Games%20social%20image.jpg?itok=REjC6Nr4",
  atributos: {inteligencia: 95, habilidade: 60, sobrevivencia: 80
  }
};

var cartas = [cartas1, cartas2, cartas3, cartas4, cartas5, cartas6, cartas7, cartas8, cartas9, cartas10, cartas11, cartas12, cartas13];

var cartasJogador = [cartas1, cartas2, cartas3, cartas4, cartas5, cartas6, cartas7, cartas8, cartas9, cartas10, cartas11, cartas12, cartas13];

var cartasMaquina = [cartas1, cartas2, cartas3, cartas4, cartas5, cartas6, cartas7, cartas8, cartas9, cartas10, cartas11, cartas12, cartas13];

var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  
  if(cartasJogador.length > 0 && cartasMaquina.length > 0) { 
    var numeroCartaMaquina = parseInt(Math.random() * cartasMaquina.length);
  cartaMaquina = cartasMaquina[numeroCartaMaquina];
  console.log(cartaMaquina);

  var numeroCartaJogador = parseInt(Math.random() * cartasJogador.length);
  cartaJogador = cartasJogador[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = false;

  exibirCarta(cartaJogador, "jogador");  
  }
  
  else {
    document.getElementById("btnSortear").disabled = true;
     document.getElementById("btnJogar").disabled = true;
    var divResultado = document.getElementById("resultado");
    divResultado.innerHTML = "Um dos jogadores não tem cartas suficientes para jogar.";
    
  }
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" + atributo;
  }

  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");
  
  if (
    cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
    cartasJogador.push(cartaMaquina);
    var index = cartasMaquina.indexOf(cartaMaquina);
    cartasMaquina.splice(index , 1);
    htmlResultado = "<p class'resultado-final'>VOCÊ VENCEU! A CARTA DO ADVERSÁRIO AGORA É SUA.</p>";
  } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
    cartasMaquina.push(cartaJogador);
    var index = cartasJogador.indexOf(cartaJogador);
    cartasJogador.splice(index , 1);
     htmlResultado = "<p class'resultado-final'>PERDEU! AGORA A SUA CARTA PERTENCE AO ADVERSÁRIO.</p>";
  } else {
     htmlResultado = "<p class'resultado-final'>EMPATOU!</p>";
  }
  divResultado.innerHTML = htmlResultado;
  // document.getElementById('btnJogar').disabled = true;
  exibirCarta(cartaMaquina, "maquina");
  
}

function exibirCarta(carta, jogador) {
  
  if(jogador === "jogador"){
    
    var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${carta.imagem})`;
  // divCartaJogador.style.backgroundImage=url(" + cartaJogador.imagem");

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in carta.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      carta.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${carta.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
    
  }
  
  else {
    var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${carta.imagem})`;
  // divCartaJogador.style.backgroundImage=url(" + cartaJogador.imagem");

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in carta.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      carta.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${carta.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
}