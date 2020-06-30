function preload() {

  // imagens
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');  
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');  
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');  
  imagemGameOver = loadImage('imagens/assets/game-over.png');  
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');  
  imagemVida = loadImage('imagens/assets/coracao.png');  
   
  imagemFundo = loadImage('imagens/cenario/fundo.png');  
  
  for (let i = 1; i <= 7; i++) {
    imagemCenario.push(loadImage('imagens/cenario/layer_0'+i+'_2048 x 1546.png'));
  }
  
  for (let i = 1; i <= 20; i++) {
    imagemPersonagem.push(loadImage('imagens/personagem/Run ('+i+').png'));
  }

  for (let i = 1; i <= 30; i++) {
    imagemPersonagemGameOver.push(loadImage('imagens/personagem/Dead ('+i+').png'));
  }
     
  for (let i = 0; i <= 12; i++) {
    imagemInimigo1.push(loadImage('imagens/inimigos/skeleton2-walking_'+i+'.png'));
  }
  for (let i = 0; i <= 10; i++) {
    imagemInimigo2.push(loadImage('imagens/inimigos/skeleton-fly_'+i+'.png'));
  }
  for (let i = 0; i <= 16; i++) {
    imagemInimigo3.push(loadImage('imagens/inimigos/skeleton-idle_'+i+'.png'));
  }
  for (let i = 0; i <= 25; i++) {
    imagemInimigo4.push(loadImage('imagens/inimigos/skeleton-walking_'+i+'.png'));
  }
  
  // fontes
  fonteTelaInicial = loadFont('fonts/tmj.ttf');  
  
  // configs
  fita = loadJSON('fita/fita.json')
  
  // sons
  somDoJogo = loadSound('sons/equador-64.mp3');
  somDoPulo = loadSound('sons/jump.mp3');
  somDoGameOver = loadSound('sons/gameover.mp3');
  somDoStageClear = loadSound('sons/stage-clear.mp3');
  somDaAlternativaCerta = loadSound('sons/checkpoint.mp3');
}
  