class Jogo {

  constructor() {
    this.indiceAtual = 0
    this.indicePerguntaAtual = 0;
    this.mapa = fita.mapa
    this.perguntas = fita.perguntas
  }

  setup() {
    createCanvas(windowWidth, windowHeight);
    cenario = new Cenario(imagemFundo, 3);
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
    personagem = new Personagem(imagemPersonagem, 0, 30, 110, 135, 110, 135);

    const inimigo1 = new Inimigo('a',imagemInimigo1, width - 52, 80, 52, 52, 124, 104, 10);
    const inimigo2 = new Inimigo('b',imagemInimigo2, width - 52, 70, 52, 52, 104, 104, 10);
    const inimigo3 = new Inimigo('c',imagemInimigo3, width - 52, 80, 52, 52, 104, 104, 10);
    const inimigo4 = new Inimigo('d',imagemInimigo4, width - 52, 70, 52, 52, 104, 104, 10);

    pontuacao = new Pontuacao();

    inimigos.push(inimigo1);
    inimigos.push(inimigo2);
    inimigos.push(inimigo3);
    inimigos.push(inimigo4);
  }

  keyPressed(key) {
    if (key == ' ') {
      personagem.pula();
      if (fita.configuracoes.comSom) 
       somDoPulo.play();
    }
  }

  _botao() {
    botaoGerenciador.y = height / 7 * 5;
    botaoGerenciador.draw()
  }

  _exibePergunta(pergunta) {
    let xPergunta = width/2
    let yPergunta = 200
    let yDist = 55;
    let xDist = 70;
    let imgSize = 55;
    
    image(imagemInimigo1[0],xPergunta-xDist,yPergunta+10,imgSize,imgSize);
    image(imagemInimigo2[0],xPergunta-xDist,yPergunta+yDist+10,imgSize,imgSize);
    image(imagemInimigo3[0],xPergunta-xDist,yPergunta+yDist*2+10,imgSize,imgSize);
    image(imagemInimigo4[0],xPergunta-xDist,yPergunta+yDist*3+10,imgSize,imgSize);     fill("#ffff00");
    textFont(fonteTelaInicial);
    textSize(40)
    textAlign(CENTER)
    text(pergunta.texto,xPergunta,yPergunta);    
    text(pergunta.a,xPergunta+xDist,yPergunta+yDist);    
    text(pergunta.b,xPergunta+xDist,yPergunta+yDist*2);    
    text(pergunta.c,xPergunta+xDist,yPergunta+yDist*3);    
    text(pergunta.d,xPergunta+xDist,yPergunta+yDist*4);        
  }
  
  _calculaErros() {
    
    if (fita.configuracoes.comSom) 
       somDoStageClear.play()
    
    rectMode(CENTER);
    fill("#f0f0f0");
    rect(width / 2 , 300, 700, 300)
    fill("#ff000c");
    textFont(fonteTelaInicial);
    textSize(60)
    textAlign(CENTER)
    if (questoesErradas===1)  {
     text('Muito bom!',width / 2, 280  );
     text('Você errou só uma!',width / 2, 380);
    } else if (questoesErradas>1) {
      text('Bom trabalho!',width / 2, 280 );
      text('Você errou '+questoesErradas+' perguntas',width / 2, 380);
    } else {
     text('Parabéns!',width / 2 , 280);
     text('Você não errou nenhuma!',width / 2 , 380);
    }
  }
  
  draw() {

    cenario.exibe();
    cenario.move();
    vida.draw();
    pontuacao.exibe();
    personagem.exibe();

    perguntaAtual = this.perguntas[this.indicePerguntaAtual];
    
    if (!isGameOver)
      personagem.aplicaGravidade();

    const linhaAtual = this.mapa[this.indiceAtual];
    const inimigo = inimigos[linhaAtual.inimigo]
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.velocidade = linhaAtual.velocidade;

    if (!isGameOver) 
      inimigo.exibe();{
      inimigo.move();
    }
         
    if (inimigoVisivel) {
      this.indiceAtual++;
      inimigo.aparece()
      if (this.indiceAtual > this.mapa.length - 1) {
        this.indiceAtual = 0;
      }
      console.log("velocidade =" + inimigo.velocidade);
    }

    this._exibePergunta(perguntaAtual)
    
    if (personagem.estaColidindo(inimigo)) {

      console.log('Colidiu!');
      vida.perdeVida();   
      questoesErradas++;
      
      console.log('inimigo.opcao='+inimigo.opcao);
      console.log('pergunta.resposta='+perguntaAtual.resposta);
      if (inimigo.opcao == perguntaAtual.resposta) {   
        
       if (fita.configuracoes.comSom) 
         somDaAlternativaCerta.play()
                
        pontuacao.adicionarPonto(); 
        questoesErradas--; 
        this.indicePerguntaAtual++;
        if (this.indicePerguntaAtual > this.perguntas.length - 1) {          
          this._calculaErros();          
          this.indicePerguntaAtual = 0;          
          questoesErradas=0;
          pontuacao = new Pontuacao();
          setTimeout( () => {          
          this.indiceAtual = 0
          this.mapa = fita.mapa
          vida = new Vida(fita.configuracoes.vidaMaxima,
                          fita.configuracoes.vidaInicial);           
          cenaAtual = 'telaInicial';
          inimigo.aparece();
          loop();
          }, 7000);
          noLoop();       
          
        }      
        vida.vidas++;
      }
       
      if (vida.vidas === 0) {
        console.log('Sem vidas!');
        isGameOver = true; 
        image(imagemGameOver, width / 2 - 200, height / 3);
        
        if (fita.configuracoes.comSom) 
          somDoGameOver.play()
        
        setTimeout( () => {
          isGameOver=false; 
          this.indiceAtual = 0
          this.mapa = fita.mapa
          vida = new Vida(fita.configuracoes.vidaMaxima,
                          fita.configuracoes.vidaInicial);           
          cenaAtual = 'telaInicial';
          inimigo.aparece();
          pontuacao = new Pontuacao();
          questoesErradas=0;
          loop();
        }, 7000);
        noLoop();
      }
      console.log(' vidas = '+vida.vidas);
      personagem.tornarInvencivel();       
      
    }

  }

}