class Animacao {
  constructor(matriz,imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    this.matriz = matriz;
    this.imagem = imagem;
    this.x = x;
    this.variacaoY = variacaoY;
    this.y = height - altura - this.variacaoY;
    this.largura = largura;
    this.altura = altura;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    this.frameAtual=0;
  }

  exibe() {
 //   console.log("this.frameAtual 1 ="+this.frameAtual);
    image(this.imagem,this.x,this.y,this.largura,this.altura,
          this.matriz[this.frameAtual][0],
          this.matriz[this.frameAtual][1],
          this.larguraSprite ,this.alturaSprite);
    this.anima();
  }
      
  anima() {
    this.frameAtual++;  
 //   console.log("this.frameAtual 2 ="+this.frameAtual);
 //   console.log("this.matriz ="+this.matriz.length);
    if (this.frameAtual >= this.matriz.length-1) {
      this.frameAtual=0;
//      console.log("this.frameAtual zero!");
    }
  }
  
}