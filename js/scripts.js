const secondHand = document.querySelector("#second-hand");
const minsHand = document.querySelector("#min-hand");
const hourHand = document.querySelector("#hour-hand");
const hourUp = document.querySelector("#hourUp");
const minUp = document.querySelector("#minUp");
const secUp = document.querySelector("#secUp");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
//  checks to see if hand is at 12o'clock, if so, shows the static hand, otherwise, checks to see if it the first pass after 12oclock, if so makes moving hand visable again.
  
  if (seconds < 2) {
    if (seconds == 0) {
    secondHand.style.display = "none";
    secUp.style.display = "block";
    } else  {
    secondHand.style.display = "block";
    secUp.style.display = "none";
  }
}
 // moves the second had forward via rotation
  const secondsDegrees = seconds * 6 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  if (mins < 2) {
  if (seconds == 0 && mins == 0) {
    minsHand.style.display = "none";
    minUp.style.display = "block";
  } else {
    minsHand.style.display = "block";
    minUp.style.display = "none";
  }
  }
   // moves the minute had forward via rotation
  const minsDegrees = mins * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();


  if (hour == 0) {
      hourHand.style.display = "none";
      hourUp.style.display = "block";
    } else {
      hourHand.style.display = "block";
      hourUp.style.display = "none";
    }
 
  
  const hourDegrees = hour * 30 + mins / 2 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
