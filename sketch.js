
var mn, sc, hr;


function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
  
}

function draw() {
  background("pink");  

  secondsHand();
  minutesHand();
  hoursHand();

  for(i =0 ; i<360; i = i+6){
    noStroke()
    if(i%30 === 0){
      fill("green")
      //console.log(i)
    }
    else{
      fill("black")
    }
    push();
    translate(200,200)
    rotate(i)
    circle(110,0,5)
    pop();
  }
  
}

function secondsHand(){
  sc= second();
  text(sc,200,50)
  var scAngle = map(sc,0,60,0,360)
  push();
  stroke("red")
  strokeWeight(3)
  translate(200,200)
  rotate(scAngle+180)
  line(0,0,0,100)
  pop()

}

function minutesHand(){
  mn= minute();
  text(mn,180,50)
  var mnAngle = map(mn,0,60,0,360)
  push();
  stroke("blue")
  strokeWeight(3)
  translate(200,200)
  rotate(mnAngle+180)
  line(0,0,0,90)
  pop()

}

function hoursHand(){
  hr= hour();
  text(hr,160,50)
  var hrAngle = map(hr,0,12,0,360)
  push();
  stroke("green")
  strokeWeight(3)
  translate(200,200)
  rotate(hrAngle+180)
  line(0,0,0,60)
  pop()

}