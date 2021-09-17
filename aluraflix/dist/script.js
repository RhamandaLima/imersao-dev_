var imagemFilme = document.getElementById("imagem-filme");
var selectCategoria = document.getElementById("select-categoria");
var mensagemDeErro = document.getElementById("mensagemErro");
var caixaFilmesDrama = document.getElementById("caixaFilmesDrama");
var caixaFilmesComedia = document.getElementById("caixaFilmesComedia");
var caixaFilmesRomance = document.getElementById("caixaFilmesRomance");
var buttonEnviar = document.getElementById("enviar");
var indiceDrama = 0;
var indiceComedia = 0;
var indiceRomance = 0;

var listaFilmesDrama = [
  "https://br.web.img2.acsta.net/medias/nmedia/18/89/89/00/20143859.jpg", "https://br.web.img2.acsta.net/pictures/21/05/05/11/46/4987713.jpg", "https://images.squarespace-cdn.com/content/v1/58b866f417bffc4dc469acab/1609006238624-9CDIVFZTKYPKHB7H8C81/critica+o+ceu+da+meia+noite+netflix","http://vortexcultural.com.br/images/2021/05/milagre-na-cela-7.jpg"
];

var listaFilmesComedia = ["https://br.web.img3.acsta.net/c_310_420/pictures/210/068/21006856_20130517195500909.jpg", "https://s2.glbimg.com/DVvxZCVjJOIqFXBTZbJE-zFlpUU=/https://wp-globofilmes.tsuru.glbimg.com/uploads/2019/09/mmeup3_0002_cartaz_hospital_tel_lado_rgb_72dpis_final_01_jt.jpg", "https://br.web.img3.acsta.net/r_1280_720/medias/nmedia/18/87/29/37/19874003.jpg", "https://www.cafecomfilme.com.br/media/k2/items/cache/d61d44254608dd06ccdd2ff02982d14d_XL.jpg?t=20181026_230951"
];

var listaFilmesRomance = ["https://64.media.tumblr.com/860d989c9105ae3bb072ff9edb678647/0fa4556051f35f58-a7/s1280x1920/47ab4fbd39db17511d7ba9ae6895f5e4ebabe5c1.jpg", "https://br.web.img2.acsta.net/pictures/19/10/29/15/15/3552774.jpg", "https://br.web.img3.acsta.net/pictures/14/12/11/15/29/051042.jpg", "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/1d5821b3b0518227ba15363beb2ea699182d0eae275cc82dbfbeea2750f4fdc4._RI_V_TTW_.jpg"
];

atualizarLista();

function Enviar() {
  var imagemRecebida = imagemFilme.value;
  var categoriaSelecionada = selectCategoria.value;

  if (imagemRecebida == "") {
    mensagemDeErro.innerHTML = "Insira o link da imagem a ser adicionada.";
    return;
  } else if (
    listaFilmesDrama.indexOf(imagemRecebida) > -1 ||
    listaFilmesComedia.indexOf(imagemRecebida) > -1 ||
    listaFilmesRomance.indexOf(imagemRecebida) > -1
  ) {
    mensagemDeErro.innerHTML = "Esse filme já está no catálogo.";
    return;
  } else {
    if (categoriaSelecionada == "drama") {
      listaFilmesDrama.push(imagemRecebida);
      atualizarLista();
      return;
    } else if (categoriaSelecionada == "comedia") {
      listaFilmesComedia.push(imagemRecebida);
      atualizarLista();
      return;
    } else {
      listaFilmesRomance.push(imagemRecebida);
      atualizarLista();
      return;
    }
  }
  return;
}

function atualizarLista() {
  while (indiceDrama < listaFilmesDrama.length) {
    caixaFilmesDrama.innerHTML +=
      "<img src=" + listaFilmesDrama[indiceDrama] + ">    ";
    indiceDrama++;
  }

  while (indiceComedia < listaFilmesComedia.length) {
    caixaFilmesComedia.innerHTML +=
      "<img src=" + listaFilmesComedia[indiceComedia] + ">    ";
    indiceComedia++;
  }

  while (indiceRomance < listaFilmesRomance.length) {
    caixaFilmesRomance.innerHTML +=
      "<img src=" + listaFilmesRomance[indiceRomance] + ">    ";
    indiceRomance++;
  }
  return;
}