var imagemFilme = document.getElementById("imagem-filme");
var nomeFilme = document.getElementById("nome-filme");
var selectCategoria = document.getElementById("select-categoria");
var mensagemDeErro = document.getElementById("mensagemErro");
var caixaFilmesDrama = document.getElementById("caixaFilmesDrama");
var caixaFilmesComedia = document.getElementById("caixaFilmesComedia");
var caixaFilmesRomance = document.getElementById("caixaFilmesRomance");
var buttonEnviar = document.getElementById("enviar");
var indiceDrama = 0;
var indiceComedia = 0;
var indiceRomance = 0;

var nomeFilmesDrama = [
  "Intocavéis",
  "A Última Carta de Amor",
  "Sol da Meia-Noite",
  "O milagre da cela 07"
];

var nomeFilmesComedia = [
  "Os Estagiários",
  "Minha mãe é uma peça 3",
  "Se beber, não case!",
  "Gente Grande"
];

var nomeFilmesRomance = [
  "A cinco passos de você",
  "Adoráveis Mulheres",
  "Simplesmente Acontece",
  "Um dia"
];

var listaFilmesDrama = [
  "https://br.web.img2.acsta.net/medias/nmedia/18/89/89/00/20143859.jpg",
  "https://br.web.img2.acsta.net/pictures/21/05/05/11/46/4987713.jpg",
  "https://images.squarespace-cdn.com/content/v1/58b866f417bffc4dc469acab/1609006238624-9CDIVFZTKYPKHB7H8C81/critica+o+ceu+da+meia+noite+netflix",
  "http://vortexcultural.com.br/images/2021/05/milagre-na-cela-7.jpg"
];

var listaFilmesComedia = [
  "https://br.web.img3.acsta.net/c_310_420/pictures/210/068/21006856_20130517195500909.jpg",
  "https://s2.glbimg.com/DVvxZCVjJOIqFXBTZbJE-zFlpUU=/https://wp-globofilmes.tsuru.glbimg.com/uploads/2019/09/mmeup3_0002_cartaz_hospital_tel_lado_rgb_72dpis_final_01_jt.jpg",
  "https://br.web.img3.acsta.net/r_1280_720/medias/nmedia/18/87/29/37/19874003.jpg",
  "https://www.cafecomfilme.com.br/media/k2/items/cache/d61d44254608dd06ccdd2ff02982d14d_XL.jpg?t=20181026_230951"
];

var listaFilmesRomance = [
  "https://64.media.tumblr.com/860d989c9105ae3bb072ff9edb678647/0fa4556051f35f58-a7/s1280x1920/47ab4fbd39db17511d7ba9ae6895f5e4ebabe5c1.jpg",
  "https://br.web.img2.acsta.net/pictures/19/10/29/15/15/3552774.jpg",
  "https://br.web.img3.acsta.net/pictures/14/12/11/15/29/051042.jpg",
  "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/1d5821b3b0518227ba15363beb2ea699182d0eae275cc82dbfbeea2750f4fdc4._RI_V_TTW_.jpg"
];

atualizarLista();

function enviar() {
  var imagemRecebida = imagemFilme.value;
  var categoriaSelecionada = selectCategoria.value;
  var nomeFilmeRecebido = nomeFilme.value;

  if (imagemRecebida == "" || nomeFilmeRecebido == "") {
    mensagemDeErro.innerHTML =
      "Insira o link da imagem e o nome do filme a ser adicionado.";
    imagemFilme.value = "";
    nomeFilme.value = "";
    return;
  } else if (
    listaFilmesDrama.indexOf(imagemRecebida) > -1 ||
    listaFilmesComedia.indexOf(imagemRecebida) > -1 ||
    listaFilmesRomance.indexOf(imagemRecebida) > -1 ||
    nomeFilmesDrama.indexOf(nomeFilmeRecebido) > -1 ||
    nomeFilmesComedia.indexOf(nomeFilmeRecebido) > -1 ||
    nomeFilmesRomance.indexOf(nomeFilmeRecebido) > -1
  ) {
    imagemFilme.value = "";
    nomeFilme.value = "";
    mensagemDeErro.innerHTML = "Esse filme já está no catálogo.";
    return;
  } else if (!imagemRecebida.endsWith(".jpg")) {
    imagemFilme.value = "";
    nomeFilme.value = "";
    mensagemDeErro.innerHTML = "Insira um link de imagem válido.";
    return;
  } else {
    if (categoriaSelecionada == "drama") {
      listaFilmesDrama.push(imagemRecebida);
      nomeFilmesDrama.push(nomeFilmeRecebido);
      atualizarLista();
    } else if (categoriaSelecionada == "comedia") {
      listaFilmesComedia.push(imagemRecebida);
      nomeFilmesComedia.push(nomeFilmeRecebido);
      atualizarLista();
    } else if (categoriaSelecionada == "romance") {
      listaFilmesRomance.push(imagemRecebida);
      nomeFilmesRomance.push(nomeFilmeRecebido);
      atualizarLista();
    }
  }
  imagemFilme.value = "";
  nomeFilme.value = "";
  return;
}

function remover() {
  var imagemRecebida = imagemFilme.value;
  var categoriaSelecionada = selectCategoria.value;
  var nomeFilmeRecebido = nomeFilme.value;

  if (imagemRecebida == "" || nomeFilmeRecebido == "") {
    mensagemDeErro.innerHTML =
      "Insira o link da imagem e o nome do filme a ser removido.";
    imagemFilme.value = "";
    nomeFilme.value = "";
    return;
  } else if (
    listaFilmesDrama.indexOf(imagemRecebida) < 0 &&
    listaFilmesComedia.indexOf(imagemRecebida) < 0 &&
    listaFilmesRomance.indexOf(imagemRecebida) < 0 &&
    nomeFilmesDrama.indexOf(nomeFilmeRecebido) < 0 &&
    nomeFilmesComedia.indexOf(nomeFilmeRecebido) < 0 &&
    nomeFilmesRomance.indexOf(nomeFilmeRecebido) < 0
  ) {
    imagemFilme.value = "";
    nomeFilme.value = "";
    mensagemDeErro.innerHTML = "Esse filme não está no catálogo.";
    return;
  } else if (!imagemRecebida.endsWith(".jpg")) {
    imagemFilme.value = "";
    nomeFilme.value = "";
    mensagemDeErro.innerHTML = "Insira um link de imagem válido.";
    return;
  } else {
    if (categoriaSelecionada == "drama") {
      var posicao = listaFilmesDrama.indexOf(imagemRecebida);
      listaFilmesDrama.splice(posicao, 1);
      nomeFilmesDrama.splice(posicao, 1);
      atualizarLista();
    } else if (categoriaSelecionada == "comedia") {
      var posicao = listaFilmesDrama.indexOf(imagemRecebida);
      listaFilmesComedia.splice(posicao, 1);
      nomeFilmesComedia.splice(posicao, 1);
      atualizarLista();
    } else if (categoriaSelecionada == "romance") {
      var posicao = listaFilmesDrama.indexOf(imagemRecebida);
      listaFilmesRomance.splice(posicao, 1);
      nomeFilmesRomance.splice(posicao, 1);
      atualizarLista();
    }
  }
  imagemFilme.value = "";
  nomeFilme.value = "";
  return;
}

function atualizarLista() {
  indiceRomance = 0;
  indiceComedia = 0;
  indiceDrama = 0;
  caixaFilmesComedia.innerHTML = "";
  caixaFilmesRomance.innerHTML = "";
  caixaFilmesDrama.innerHTML = "";

  while (indiceDrama < listaFilmesDrama.length) {
    caixaFilmesDrama.innerHTML +=
      "<figure><img src=" +
      listaFilmesDrama[indiceDrama] +
      "><figcaption>" +
      nomeFilmesDrama[indiceDrama] +
      "</figcaption></figure>";
    indiceDrama++;
  }

  while (indiceComedia < listaFilmesComedia.length) {
    caixaFilmesComedia.innerHTML +=
      "<figure><img src=" +
      listaFilmesComedia[indiceComedia] +
      "><figcaption>" +
      nomeFilmesComedia[indiceComedia] +
      "</figcaption></figure>";
    indiceComedia++;
  }

  while (indiceRomance < listaFilmesRomance.length) {
    caixaFilmesRomance.innerHTML +=
      "<figure><img src=" +
      listaFilmesRomance[indiceRomance] +
      "><figcaption>" +
      nomeFilmesRomance[indiceRomance] +
      "</figcaption></figure>";
    indiceRomance++;
  }
  return;
}