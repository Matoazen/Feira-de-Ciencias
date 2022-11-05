// VARIAVEIS INICIAIS E DE CONFIG
var apresentacao, apresentacaoImg;

var gameState = 0;

var img1, img2, tir1, tir2
var btn1, btn2, bnt3, btn4, btn5, btn6, btnInicial

var check1
var game1played = false;
var game2played = false;
var  trofeu, finalText

// VARIAVEIS JOGO 1
var peixe, peixeImg, fundo1, fundo1Img, mercurio;

var regras1


// VARIAVEIS JOGO 2
var regras2
var neuronios, neuroniosImg, fundo2, fundo2Img
var posicao = 0

//variaveis gerais
var contador = 30;
var contadorDisplay;
var vitoriaText
var perdeuText
var mercurioImg, mercurioGroup; mercurioGroup2

function preload() {
  apresentacaoImg = loadImage("./assets/apresentacao.png")
  fundo1Img = loadImage("./assets/fundo1.png")
  fundo2Img = loadImage("./assets/fundo2.png")
  mercurioImg = loadImage("./assets/mercurio.png")
  peixeImg = loadImage("./assets/peixe.png")
  neuroniosImg = loadImage("./assets/neuronios.png")
}

function setup() {

  //  CONFIGS INICIAIS
  createCanvas(600, 600)

  apresentacao = createSprite(300, 300, 50, 50)
   apresentacao.addImage(apresentacaoImg);
  apresentacao.scale = 1.375;

   btnInicial = createButton("Continuar");
   btnInicial.position(625, 375)
   btnInicial.class("botaoinicial")


  img1 = createImg("assets/Quadrado1.png")
  img1.position(425, 250)
  img1.size(200,200)
  img1.hide()
  img2 = createImg("assets/Quadrado2.png")
  img2.position(700, 250)
  img2.size(200,200)
  img2.hide()
  tir1 = 0
  tir2 = 0

  btn1 = createButton("Desvie do mercúrio");
  btn1.position(460, 330)
  btn1.hide();
  btn2 = createButton("Salve os neurônios");
  btn2.position(735, 330)
  btn2.hide();
  btn3 = createButton("Continuar");
  btn3.position(625, 375)
  btn3.hide();

  btn4 = createButton("Continuar");
  btn4.position(625, 375)
  btn4.hide();

  btn5 = createButton("continue");
  btn5.position(625, 375)
  btn5.hide();

  btn6 = createButton("continue");
  btn6.position(625, 375)
  btn6.hide();


  contadorDisplay = createElement("h3")
  perdeuText = createElement("h3")
  vitoriaText = createElement("h3")

  check1 = createImg("./assets/check.png")
  check1.size(120, 120);
  check1.position(450, 275)
  check1.hide();

  check2 = createImg("./assets/check.png")
  check2.size(120, 120);
  check2.position(725, 275)
  check2.hide();

  mercurioGroup = new Group();
  mercurioGroup2 = new Group()

  finalText = createElement("h3")
  finalText.position(100, 50)
 

  // CONFIGS DO JOGO1
  regras1 = createElement("h7");

  fundo1 = createSprite(300, 300, 200, 200);
  fundo1.addImage(fundo1Img);
  fundo1.scale = 1.55
  fundo1.visible = false;

  peixe = createSprite(70, 350, 50, 50);
  peixe.visible = false;
  peixe.addImage(peixeImg)
  peixe.scale = 0.2

  // CONFIGS DO JOGO2
  regras2 = createElement("h7");

  fundo2 = createSprite(300, 300, 600, 600);
  fundo2.addImage(fundo2Img);
  fundo2.scale = 2
  fundo2.visible = false;

  neuronios = createSprite(300, 300, 50, 50);
  neuronios.visible = false;
  neuronios.addImage(neuroniosImg)
  neuronios.scale = 1.2


}

function draw() {
  console.log(gameState)
  background(0)

  if (gameState == 0) {
    if (keyDown("space")) {
      gameState = 1
    }

    btnInicial.mouseClicked(() => {
      gameState = 1
    })
  }
  if (gameState == 1) {
    apresentacao.visible = false;
    menu();
  }

  if (gameState == 2) {
    prejogo1();
  }
  if (gameState == 3) {
    jogo1();
    tempo();
  }
  if (gameState == 4) {
    prejogo2();
  }
  if (gameState == 5) {
    jogo2();
    tempo();
  }
  if (gameState == 6) {
    vitoria();
  }
  if (gameState == 7) {
    perdeu1();
  }

  if (gameState == 8) {
    fim();
  }
  if (gameState == 9) {
    perdeu2();
  }

  drawSprites();
}

function menu() {
  btn1.show();
  btn2.show();
  if (tir1 == 0){
    img1.show()
  } else {
  img1.hide()
  }
  if (tir2 == 0){
    img2.show()
  } else {
    img2.hide()
  }
  
  btnInicial.hide()


  if (game1played) {
    check1.show()
    btn1.hide();
  }
  if (game2played) {
    check2.show()
    btn2.hide();
  }

  if (game1played == true && game2played == true) {
     gameState = 8
     check1.hide();
     check2.hide();
  }


  btn1.mouseClicked(() => {
    check1.hide()
    check2.hide()
    gameState = 2;
  })

  btn2.mouseClicked(() => {
    check1.hide()
    check2.hide()
    gameState = 4;
  })
}



function prejogo1() {
  btn2.hide();
  btn1.hide();
  img1.hide();
  img2.hide();
  btn3.show();

  background(250)

  regras1.html("sobreviva 30 segundos desviando do mercurio, você se poderá mover para cima e para baixo para desviar, clique em continuar");
  regras1.position(525, 300)
  regras1.class("regras");

  btn3.mouseClicked(() => {
    gameState = 3;
  })
}

function prejogo2() {
  btn2.hide();
  btn1.hide();
  img1.hide();
  img2.hide();
  btn4.show();

  background(250)

  regras2.html("Não deixe o mercúrio encostar nos neurônios, clique nos mercurios para destrui-los, clique para continuar");
  regras2.position(500, 300)
  regras2.class("regras");

  btn4.mouseClicked(() => {
    gameState = 5;
  })
}

function jogo1() {
  game1played = true
  btn3.hide();
  regras1.hide()
  peixe.visible = true;
  fundo1.visible = true;
  tir1 = 1

  if (keyDown("up") && peixe.y > 300) {
    peixe.y = peixe.y - 3;
  }
  if (keyDown("down") && peixe.y < 550) {
    peixe.y = peixe.y + 3;
  }

  geradorMercurio();

  if (mercurioGroup.isTouching(peixe)) {
    gameState = 7;
  }

}

function jogo2() {
 geradorMercurio2()
 game2played = true
  btn4.hide();
  regras2.hide()
  neuronios.visible = true
  fundo2.visible = true;
  tir2 = 1
  if (mercurioGroup2.isTouching(neuronios)) {
    gameState = 9;
  }
}

function geradorMercurio() {
  if (frameCount % 40 == 0) {
    mercurio = createSprite(600, 200, 30, 30);
    mercurio.velocityX = -6;
    mercurio.y = Math.round(random(275, 575))
    mercurio.addImage(mercurioImg);
    mercurio.scale = 0.3
    mercurio.setCollider("circle", 0, 0, 55)
    mercurio.lifetime = 600 / 6 + 10.5
    mercurioGroup.add(mercurio)
  }
}
//eu fiz
function geradorMercurio2() {
  if (frameCount % 40 == 0) {
    posicao = Math.round(random(1, 6))
    
    if (posicao == 1) {
      mercurio = createSprite(-10, -10, 30, 30);
      mercurio.velocityX = 6;
      mercurio.velocityY = 6;
    }
    if (posicao == 2) {
      mercurio = createSprite(300, -10, 30, 30);
      mercurio.velocityY = 6;
    }
    if (posicao == 3) {
      mercurio = createSprite(610, -10, 30, 30);
      mercurio.velocityX = -6;
      mercurio.velocityY = 6;
    }
    if (posicao == 4) {
      mercurio = createSprite(-10, 610, 30, 30);
      mercurio.velocityX = 6;
      mercurio.velocityY = -6;
    }
    if (posicao == 5) {
      mercurio = createSprite(300, 610, 30, 30);
      mercurio.velocityY = -6;
    }
    if (posicao == 6) {
      mercurio = createSprite(610, 610, 30, 30);
      mercurio.velocityX = -6;
      mercurio.velocityY = -6;
    }
    mercurio.addImage(mercurioImg);
    mercurio.scale = 0.3
    mercurio.setCollider("circle", 0, 0, 65)
    mercurioGroup2.add(mercurio)
}
  if(mousePressedOver(mercurio)) {
    mercurio.destroy()
  }
}


function tempo() {
  contadorDisplay.show();
  contadorDisplay.html(Math.floor(contador).toFixed(1));
  contadorDisplay.position(400, 20);
  contadorDisplay.class("contador");
  // contadorDisplay.show();
  contador -= 0.03


  if (contador < 0) {
    gameState = 6
  }
}

function vitoria() {
  contadorDisplay.hide();
  mercurioGroup.destroyEach();
  mercurioGroup2.destroyEach();

  
  background(250)

  fundo1.visible = false;
  peixe.visible = false;

  fundo2.visible = false;
  neuronios.visible = false;

  vitoriaText.show();
  vitoriaText.html("Parabens você passou, Aperte 'espaço' ou no botão para continuar!")
  vitoriaText.class("regras")
  vitoriaText.position(500, 300)
  btn5.show();

  btn5.mouseClicked(() => {
    vitoriaText.hide();
    contador = 30
    btn5.hide();
    gameState = 1
  })
}

function perdeu1() {
  contadorDisplay.hide();
  mercurioGroup.destroyEach()
  mercurioGroup2.destroyEach()

  background(250)

  fundo1.visible = false;
  peixe.visible = false;
  
  fundo2.visible = false;
  neuronios.visible = false;

  perdeuText.show();
  perdeuText.html("A não! você nao conseguiu, Aperte 'espaço' ou no botão para continuar!")
  perdeuText.class("regras")
  perdeuText.position(500, 300)

  btn6.show();

  btn6.mouseClicked(() => {
    perdeuText.hide();
    contador = 30;
    btn6.hide();
    gameState = 2
    regras1.show();

  })
}
function perdeu2() {
  contadorDisplay.hide();
  mercurioGroup.destroyEach()
  mercurioGroup2.destroyEach()

  background(250)

  fundo1.visible = false;
  peixe.visible = false;
  
  fundo2.visible = false;
  neuronios.visible = false;

  perdeuText.show();
  perdeuText.html("A não! você nao conseguiu, Aperte 'espaço' ou no botão para continuar!")
  perdeuText.class("regras")
  perdeuText.position(500, 300)

  btn6.show();

  btn6.mouseClicked(() => {
    perdeuText.hide();
    regras2.show()
    contador = 30;
    btn6.hide();
    gameState = 4

  })
}

function fim() {
  background("white")  
  trofeuImg = createImg("assets/trofeu.png")
  trofeuImg.position(465, 250)
  trofeuImg.size(400, 400)
  finalText.html("Obrigado(a) por jogar!") 
  finalText.position(565, 200)
}