var rhamanda = {avatar: "https://i1.sndcdn.com/avatars-000525922770-zs6gm1-t500x500.jpg", nome: "Rhamanda",  vitorias:2, empates:1, derrotas:1, pontos:0};
var leandro = {avatar: "https://cdn.imgbin.com/5/3/4/imgbin-youtube-game-social-media-youtube-GzNMnq2ZwR3WRLj6y5J6srfsX.jpg", nome: "Leandro",  vitorias:1, empates:1, derrotas:2, pontos:0};
var cathyanna = {avatar: "https://avatarfiles.alphacoders.com/169/thumb-1920-169657.jpg", nome: "Cathyanna",  vitorias:1, empates:1, derrotas:2, pontos:0};

function calculaPontos(jogador) {
  var pontos = (jogador.vitorias* 3) + jogador.empates;
  return pontos;
}

rhamanda.pontos = calculaPontos(rhamanda);
leandro.pontos = calculaPontos(leandro);
cathyanna.pontos = calculaPontos(cathyanna);

var jogadores = [rhamanda, leandro, cathyanna];

function exibeJogadoresNaTela(jogadores){
  var elemento = "";
  for(var i = 0; i < jogadores.length; i++) {
     elemento += "<tr><td><img height='50px' src ='" + jogadores[i].avatar + "'></td>";
     elemento += "<td>" + jogadores[i].nome + "</td>";
     elemento += "<td>" + jogadores[i].vitorias + "</td>";
     elemento += "<td>" + jogadores[i].empates + "</td>";
     elemento += "<td>" + jogadores[i].derrotas + "</td>";
     elemento += "<td>" + jogadores[i].pontos + "</td>";
     elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
     elemento += "<td><button onClick='adicionarEmpate()'>Empate</button></td>";
     elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
      elemento += "</tr>";
  }
  
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i){
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  
  for(var j = 0; j < jogadores.length; j++){
    if(j != i) {
      var jogador = jogadores[j];
      jogador.derrotas++;
      jogador.pontos = calculaPontos(jogador);
    }
  } 
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(){
  for(var j = 0; j < jogadores.length; j++){
    var jogador = jogadores[j];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
  } 
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i){
  var jogador = jogadores[i];
  jogador.derrotas++;
  
  for(var j = 0; j < jogadores.length; j++){
    if(j != i) {
      var jogador = jogadores[j];
      jogador.vitorias++;
      jogador.pontos = calculaPontos(jogador);
    }
  }
  exibeJogadoresNaTela(jogadores);
}