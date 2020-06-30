class Personagem extends AnimacaoNova {

 constructor(matriz,x, variacaoY, largura, altura, larguraSprite, alturaSprite){
   super(matriz,x, variacaoY, largura, altura, larguraSprite, alturaSprite)
   
   this.variacaoY = variacaoY
   this.yInicial = height - this.altura - this.variacaoY;
   this.y = this.yInicial;
   
   this.gravidade = 5
   this.velocidadeDoPulo =  0
   this.alturaDoPulo = -30
   this.pulos = 0
   this.invencivel = false;
  }
 
 pula() {
  if (this.pulos < 5) { 
   console.log("pula!")
   this.velocidadeDoPulo = this.alturaDoPulo; 
    this.pulos++
  }
 }
  
 aplicaGravidade() {
   this.y = this.y + this.velocidadeDoPulo
   this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade
   
   if (this.y > this.yInicial ) {
     this.y = this.yInicial
     this.pulos = 0;
   }
 }
  
 tornarInvencivel() {
   this.invencivel = true;
   setTimeout( () => {
     this.invencivel = false;     
   }, 1000)
 }
  
 estaColidindo(inimigo) {
 //  noFill()
 //  rect(this.x,this.y,this.largura,this.altura);
 //  rect(inimigo.x,inimigo.y,inimigo.largura,inimigo.altura)
   
   if (this.invencivel) {
     return false;
   }
   
   const precisao = .7;
   
   const colisao = collideRectRect(this.x,this.y,this.largura*precisao,this.altura*precisao,
                  inimigo.x,inimigo.y,inimigo.largura*precisao,inimigo.altura*precisao)
    return colisao
 }
}