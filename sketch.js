var lock;
var password;
var plock;
var passwordInput;
var unlock;
var room;
var showResult;

function preload()
{
  room = loadImage('https://dl.dropboxusercontent.com/s/ycixsodu0sj9n17/live-escape-rooms-bg.jpg');
  lock = loadImage('https://dl.dropboxusercontent.com/s/urc08ktp47lfsfq/lock-512.png');
  unlock = loadImage('https://dl.dropboxusercontent.com/s/y8tlp5b0h5mi53q/unlock-xxl.png');
}

function setup()
{
  createCanvas(600,600);
  plock = false;
  password = 0;
  
  passwordInput = createInput();
  passwordInput.position(250,300);
  passwordInput.hide();
  
  answer1 = 0;
}

function draw()
{
  Canvas1();
  //Password text
  if(password == 0)
  {
    text("Find out the password",250,200);
    label();
  }
  else if (password == 1)
  {
    text("Password:",280,200);
  }
}

function draw1()
{
  if(answer1 == 0)
  {
  }
  else if (answer1 == 1)
  {
    showResult();
  }
  else
  {
  } 
}

function DrawCanvasButton()
{
  draw1();
  if(plock == false && mouseX > 280 && mouseX < 330 && mouseY > 300 && mouseY < 350 && mouseIsPressed == true)
  {
    if(password == 0)
    {
      password = 1;
      passwordInput.show();
      answer1 = 1;
    }
    else if (password == 1)
    {
      password = 0;
      passwordInput.hide();
      answer1 = 0;
    }
    plock = true;
  }
}

function Canvas1()
{
  background(room,600,600);
  image(lock,280,300,50,50);
  
  //click the lock in order to enter the password
  DrawCanvasButton();
}

function Canvas2()
{
  background(room,600,600);
  image(unlock,280,300,50,50);
}

function label()
{
  fill(255,255,255);
  text("1+9 = 810",100,100);
  text("8+2 = 610",100,120);
  text("3+7 = 410",100,140);
  text("5+6 = 111",100,160);
  text("2+7 = 59",100,180);
  text("3+12 = ?",100,200);
}

function showResult()
{
  //rect(390,225,35,25);
  if(passwordInput.value() != "915")
  {
    text("Try Again!",280,500);
  }
  else if(passwordInput.value() == "915")
  {
    Canvas2();
  }
}


function mouseReleased()
{
  if (plock)
  {
    plock = false;
  }
}