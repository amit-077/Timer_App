window.addEventListener("load", ()=>{
    location.replace("https://www.google.com")
    alert("Hello");
})

let min = 10;
min = (min < 10)?('0'+min) : min;
let sec = 00;
let count = 0;

if(sec <10){
document.getElementById("sec").innerHTML = '0'+ sec;
}else{
document.getElementById("sec").innerHTML = sec;
}
document.getElementById("min").innerHTML = min;

//COUNTDOWN FOR MINUTES :
function minDown(){
    console.log("MinDown");
  min--;
    if(min < 10){
      min = '0' + min;
    }
    if(min === '0-1'){
      clearInterval(secInterval);
      document.getElementById("min").innerHTML = '0' + 0;
      document.getElementById("sec").innerHTML = '0' + 0;
      console.log("Timer Ended");
      playSound();
      return 4;
  }
  document.getElementById("min").innerHTML = min;
  }

//COUNTDOWN FOR SECONDS :
function secDown(){
  console.log(min);

    if(sec === -1){
      let Terminate = minDown();
      if(Terminate === 4){
        return;
      }
      sec = 59;
    }

    if(sec <10){
      sec = sec = '0' + sec;
    }
  document.getElementById("sec").innerHTML = sec;
  sec--;

  }
let minInterval;
let secInterval;



function startTimer(){
  let inputMin = document.getElementById("setMin");
  if(inputMin.value !== ''){
      min = (inputMin.value < 10)?('0'+inputMin.value) : (inputMin.value);
      document.getElementById("min").innerHTML = min;
  }else{
    min = '00';
    document.getElementById("min").innerHTML = min;
  }

  let inputSec = document.getElementById("setSec");
  if(inputSec.value !== ''){
      sec = (inputSec.value);
      document.getElementById("sec").innerHTML = (sec > 9)? (sec) : ('0' + sec)
  }

  document.getElementById("setTime").style.display = "none";
  // if(count === 0){
  //   secDown();
  // }
  if(count === 0){
  secInterval = setInterval(secDown, 1000);
  document.getElementById("startBtn").innerHTML = "Reset";
  count++;
}else{
  location.reload();
}
//   if(count === 0){
//     if(min < 10){
//   document.getElementById("min").innerHTML = '0' + (min-1);
// }else{
//   document.getElementById("min").innerHTML = (min-1);
// }
//   min = min-1;
//   count++;
// }
  document.getElementById("stopBtn").style.display = "block";
  document.getElementById("extendMin").style.display = "block";
}



// When Pause/Resume Button is pressed
let isTimerStopped = false;

function stopTimer(){
  if(isTimerStopped === false){
    console.log(sec, min);
  clearInterval(secInterval);
  document.getElementById("stopBtn").innerHTML = "Resume";
  isTimerStopped = true;
}else{
  console.log(sec, min);
  secInterval = setInterval(secDown, 1000);
  document.getElementById("stopBtn").innerHTML = "Pause";
  isTimerStopped = false;

}
}


// ALARM SOUND

function playSound(){
  let sound = document.getElementById("timerTone");
  sound.play();
}

// Extend Time

function extendTime(){
  min = Number(min) + 2;
  if(min > 9){
    document.getElementById("min").innerHTML = min;
  }else{
    document.getElementById("min").innerHTML = '0' + min;
  }

}
