class Inimigo extends AnimacaoNova {
 constructor(opcao,imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite,velocidade){
  super(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
  this.velocidade = velocidade;
  this.opcao=opcao;
 }
  
 move() {
   this.x = this .x - this.velocidade; 
 }
  
 aparece() {
   this.x = width   
 }
  
}