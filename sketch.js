
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  if (fita.configuracoes.comSom) 
   somDoJogo.loop();
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  cenas = {
    jogo,
    telaInicial
  }
  botaoGerenciador = new BotaoGerenciador('Iniciar',width/2,height/5,'jogo');
}

function keyPressed() {
  jogo.keyPressed(key);
}

function mouseClicked() {
  jogo.keyPressed(' ');
}

function draw() {
     
  cenas[cenaAtual].draw();
  
}