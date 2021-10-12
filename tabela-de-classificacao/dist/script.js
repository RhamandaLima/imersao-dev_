var rhamanda = {
  avatar: "https://i1.sndcdn.com/avatars-000525922770-zs6gm1-t500x500.jpg",
  nome: "Rhamanda",
  vitorias: 2,
  empates: 1,
  derrotas: 1,
  pontos: 0
};
var leandro = {
  avatar: "https://playsomestudio.com.br/wp-content/uploads/2021/09/silas.jpg",
  nome: "Leandro",
  vitorias: 1,
  empates: 1,
  derrotas: 2,
  pontos: 0
};
var cathyanna = {
  avatar: "https://avatarfiles.alphacoders.com/169/thumb-1920-169657.jpg",
  nome: "Cathyanna",
  vitorias: 1,
  empates: 1,
  derrotas: 2,
  pontos: 0
};

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

rhamanda.pontos = calculaPontos(rhamanda);
leandro.pontos = calculaPontos(leandro);
cathyanna.pontos = calculaPontos(cathyanna);

var jogadores = [rhamanda, leandro, cathyanna];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento +=
      "<tr><td><img height='70px' src ='" + jogadores[i].avatar + "'></td>";
    elemento += "<td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button class='buttonAdicionar' onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento += "<td><button class='buttonAdicionar'onClick='adicionarEmpate()'>Empate</button></td>";
    elemento +=
      "<td><button class='buttonAdicionar' onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);

  for (var j = 0; j < jogadores.length; j++) {
    if (j != i) {
      var jogador = jogadores[j];
      jogador.derrotas++;
      jogador.pontos = calculaPontos(jogador);
    }
  }
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate() {
  for (var j = 0; j < jogadores.length; j++) {
    var jogador = jogadores[j];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
  }
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;

  for (var j = 0; j < jogadores.length; j++) {
    if (j != i) {
      var jogador = jogadores[j];
      jogador.vitorias++;
      jogador.pontos = calculaPontos(jogador);
    }
  }
  exibeJogadoresNaTela(jogadores);
}

function resetarJogo() {
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].avatar = "";
    jogadores[i].nome = 0;
    jogadores[i].vitorias = 0;
    jogadores[i].empates = 0;
    jogadores[i].derrotas = 0;
    jogadores[i].pontos = 0;
  }
  exibeJogadoresNaTela(jogadores);
}

function adicionarJogador() {
  var novoJogador = document.getElementById("jogador").value;
  var avatar = document.getElementById("avatar").value;
  if (novoJogador != "") {
    if (avatar.endsWith(".jpg") || avatar.endsWith(".png")) {
      jogador.innerHTML = novoJogador;
      var novoJogador = {
        avatar: avatar,
        nome: novoJogador,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0,
        resultado: "none"
      };
      jogadores.push(novoJogador);
      novoJogador.pontos = calculaPontos(novoJogador);
      exibeJogadoresNaTela(jogadores);
    } else {
      alert("Endereço de imagem inválido");
    }
  } else {
    alert("O nome do jogador é obrigatório");
  }
  document.getElementById("jogador").value = "";
  document.getElementById("avatar").value = "";
}