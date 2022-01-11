var garden;
var cat, catImage1, catImage2, catImage3;
var mouse, mouseImage1, mouseImage2, mouseImage3;
function preload() {
    //carregue as imagens aqui
    garden = loadImage("garden.png");
    catImage1 = loadImage("cat1.png");
    catImage2 = loadImage("cat2.png","cat3.png");
    catImage3 = loadImage("cat4.png");
    mouseImage1 = loadImage("mouse1.png");
    mouseImage2 = loadImage("mouse2.png","mouse3.png");
    mouseImage3 = loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    cat = createSprite(870,600);
    cat.addAnimation("gatoSentado", catImage1);
    cat.scale = 0.2;
    mouse = createSprite(870,600);
    mouse.addAnimation("ratoComQueijo", mouseImage1);
    mouse.scale = 0.2;
}

function draw() {

    background(garden);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    if(cat.x = mouse.x < (cat.width = mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("ultimaImagemGato", catImage3);
        cat.changeAnimation("ultimaImagemGato");
        cat.x = 300;
        cat.scale = 0.2;
        mouse.addAnimation("ultimaImagemRatp", mouseImage3);
        mouse.changeAnimation("ultimaImagemRato");
    }

    drawSprites();
}


function keyPressed(){
  //Para mover e alterar a animação, escreva o código aqui
  if(keyCode === LEFT_ARROW){
    mouse.addAnimation("ratoProvocando", mouseImage2);
    mouse.changeAnimation("ratoProvocando");
    mouse.frameDelay = 25;

    cat;velocityX = -5;
    cat.addAnimation("gatoCaminhando", catImage2);
    cat.changeAnimation("gatoCaminhando");
    cat.frameDelay = 25;
  }
}