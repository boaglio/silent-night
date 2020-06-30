class TelaInicial {

  constructor() {    
  }
  
  draw() {
   this._imagemDeFundo();
   this._texto(); 
   this._botao(); 
  }
  
  _imagemDeFundo() {
    image(imagemTelaInicial, 0,0,width,height); 
  }
  
  _texto() {
    fill("#000000");
    textFont(fonteTelaInicial);
    textSize(150)
    textAlign(CENTER)
    text('Silent Night', width/2,height/3);
    textSize(80)
    fill("#FFFF00");
    text('aprendendo sempre!',width/2,height/6*4);
  }
  
  _botao() {
    botaoGerenciador.y = height/7*5;
    botaoGerenciador.draw() 
    botaoGerenciador.show()
  }
  
}
  