const timer = document.getElementById("timer");

function delay() {
  var refresh = 1000;
  setTimeout("setTime()", refresh);
}

function setTime() {
  let today = new Date();
  var time = today.toLocaleTimeString();
  timer.textContent = time;
  console.log(time);
  delay();
}
