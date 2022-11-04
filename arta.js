let canvas = document.getElementById('Arta');
let ctx = canvas.getContext('2d');

const X = canvas.width;
const Y = canvas.height;
const min = -10;
const max = 10;

let relief = [];

const gunLength = 25;
const g = 9.81;

let enemyX;

//======================================================

function makeRelief() {
  let i;
  for (i = 0; i < X; i++) {
    if (i < 30) { relief[i] = 100; }
    else { relief[i] = relief[i - 1] + getIntRandomInRange(min, max); }
    if (relief[i] < 0) { relief[i] = 10; }
  }
  enemyX = getIntRandomInRange(200, X - 10);
}

//======================================================

function drawRelief() {
  ctx.fillStyle = "#e8e8e8";
  ctx.fillRect(0, 0, X, Y);
  ctx.strokeStyle = "#000000";

  let x0 = 0;
  let y0 = Y;
  let i;

  for (i = 0; i < X; i++) {
    ctx.beginPath();
    ctx.moveTo(x0 + i, y0);
    ctx.lineTo(x0 + i, y0 - relief[i]);
    ctx.closePath();
    ctx.stroke();
  }

  ctx.lineWidth = 3;
  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.moveTo(enemyX - 7, Y - relief[enemyX] - 6);
  ctx.lineTo(enemyX + 7, Y - relief[enemyX] - 6);
  ctx.closePath();
  ctx.stroke();
  ctx.strokeStyle = "blue";
  ctx.beginPath();
  ctx.moveTo(enemyX - 7, Y - relief[enemyX] - 3);
  ctx.lineTo(enemyX + 7, Y - relief[enemyX] - 3);
  ctx.closePath();
  ctx.stroke();
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(enemyX - 7, Y - relief[enemyX]);
  ctx.lineTo(enemyX + 7, Y - relief[enemyX]);
  ctx.closePath();
  ctx.stroke();
}


//======================================================


function aiming() {
  

  let angle = Number(document.getElementById("Angle").value) * Math.PI / 180;

  


  let x0 = 2 + Math.floor(gunLength * Math.cos(angle));
  let y0 = Y - 100 - Math.floor(gunLength * Math.sin(angle));

  
  

  
  








  const R = 1;
  const k = 8;
  
  let v0 =
    Number(document.getElementById("Velocity").value) / k;
  const X0 = 2 + Math.floor(gunLength * Math.cos(angle));
  const Y0 = Y - 100;
  let t = 0;
  let x = X0;
  let y = Y0;
  
  

  
  let kut =  (Math.PI/2)-(Math.asin(((enemyX - x + 13)*g)/((v0)*(v0)))/2);
  document.getElementById("kut").innerHTML = kut;



  ctx.strokeStyle = "#00FF00";
  ctx.lineWidth = 3;

  while (true) {
    x = Math.floor(X0 + v0 * Math.cos(kut) * t);
    //y = Math.floor(Y0 - x * Math.tan(angle) + (g * x * x) / (2 * v0 * v0 * Math.cos(angle) * Math.cos(angle)));
    y = Math.floor(

      Y0 - x * Math.tan(kut) + (g * x * x) / (2 * v0 * v0 * Math.cos(kut) * Math.cos(kut))

    );
    if (/*(x > 0) && (x < X) && (y <= Y - relief[x])*/true) {
      ctx.beginPath();
      ctx.arc(x, y, R, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
    t += 0.02;

    if ((x >= enemyX - 10) && (x <= enemyX + 10) && (y >= Y - relief[enemyX] - 5) && (y <= Y - relief[enemyX] + 5)) {
      alert("СЛАВА УКРАЇНІ !!! \n \n тут повинен лунати приспів з пісні «Арта» файного гурту «Пирятин»…");
      break;
    }

    if ((x < 0) || (x > X) || (y > Y)) { break };
  }




  

  ctx.moveTo(X0, Y0);
  ctx.lineTo(1000, Y0);


  ctx.closePath();
  ctx.stroke();





  
  ctx.strokeStyle = "#FFFF00";
  ctx.beginPath();
  ctx.moveTo(0, Y - 100);
  ctx.lineTo(15, Y - 100);
  ctx.closePath();
  ctx.stroke();
  ctx.strokeStyle = "#0000FF";
  ctx.beginPath();
  ctx.moveTo(0, Y - 105);
  ctx.lineTo(15, Y - 105);
  ctx.closePath();
  ctx.stroke();
}


//=======================================================



function fire() {
  
  aiming()
}


//=====================================================


function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
function getIntRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
