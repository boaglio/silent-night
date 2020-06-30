class BotaoGerenciador {
  
 constructor(texto,x,y,destino){
  this.texto = texto;
   this.x = x;
   this.y = y;
   this.destino = destino;
   this.botao = createButton(this.texto)
   this.botao.mousePressed( () => this._alteraCena()  )
   this.botao.addClass('botao-tela-inicial');   
 }
  
 draw() {
   this.botao.position(this.x,this.y);
   this.botao.center('horizontal');
 }
  
 _alteraCena() {
   this.botao.hide();
   cenaAtual = this.destino
   isGameOver = false;
 }
  
 show() {
   this.botao.show();
 }  
  
} 