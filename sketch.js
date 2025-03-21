function setup() {
    createCanvas(800, 400);
  }
  
  let xJogador1 = 0;
  let xJogador2 = 0;
  
  function draw() {
    if (focused == true) {
      background ("#ffd4cc"); 
    } else {
      background("#ffb8eb");
    }
  
    textSize(20);
    text("（･∀･)つ", xJogador1, 100);
    text("( ͡° ͜ʖ ͡°)	", xJogador2, 300);
    rect(650, 0, 10, 400)
    fill ("#523935");
    if (xJogador1 > 650) {
          textSize(25)
      text(" （ ･ ∀ ･)つ tirou o cinturão do campeão mundial!!!!", 100, 200);
      noLoop();
    }
    if (xJogador2 > 650) {
      textSize(25)
      text("o famosíssimo ( ͡ °  ͜ʖ ͡ °) continua com o cinturão! ", 100, 200);
      noLoop();
    }
  }
  
  function keyReleased() {
    if (key == "d") {
      xJogador1 += random(60);
    }
    if (key == "k") {
      xJogador2 += random(70);
    }
  }
  
  // o jogador 2 é o mais rapido  corredor da historia,será que o jogador 1 removera ele do pódio mundial????