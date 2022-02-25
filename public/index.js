document.getElementById("timer-main").innerText = `${
  localStorage.getItem("h") || "00"
} : ${localStorage.getItem("m") || "00"} : ${
  localStorage.getItem("s") || "00"
}`;
function handleKeyPress(a, b, c) {
  var divtest = document.createElement("div");
  divtest.innerHTML = `>>[${a}:${b}:${c}]: New record logged.`;
  divtest.classList.add("logs");
  document.getElementById("lapse").appendChild(divtest);
}
window.onkeypress = (event) => {
  if (event.code === "Space") {
    handleKeyPress(
      localStorage.getItem("h"),
      localStorage.getItem("m"),
      localStorage.getItem("s")
    );
  }
};
function handleFormSubmit(event) {
  if (event.keyCode === 13) {
    addNewSection(event);
  }
}
function addNewSection(e) {
  var v = document.getElementById("new-section").value;
  if (v === "") return;
  var divtest = document.createElement("div");
  divtest.innerHTML = `@${v}--------------------------------------------------`;
  divtest.classList.add("logs");
  document.getElementById("lapse").appendChild(divtest);
  document.getElementById("new-section").value = "";
}
document.getElementById("clr").onclick = (e) => {
  document.getElementById("lapse").innerHTML = "###Use space bar to log data.";
};

function start() {
  if (
    localStorage.getItem("run") === "false" ||
    localStorage.getItem("run") === false
  ) {
    localStorage.setItem("run", true);
    const myInterval = setInterval(() => {
      if (
        localStorage.getItem("run") === "false" ||
        localStorage.getItem("run") === false
      ) {
        clearInterval(myInterval);
      }

      increase();
    }, 1000);
  }
}
function stop() {
  localStorage.setItem("run", false);
}
function restart() {
  localStorage.setItem("h", "00");
  localStorage.setItem("m", "00");
  localStorage.setItem("s", "00");
  localStorage.setItem("t", 0);
  localStorage.setItem("run", false);
  document.getElementById("timer-main").innerText = `${
    localStorage.getItem("h") || "00"
  } : ${localStorage.getItem("m") || "00"} : ${
    localStorage.getItem("s") || "00"
  }`;
}

function increase() {
  var t = parseInt(localStorage.getItem("t"));
  t++;
  localStorage.setItem("t", t);
  var h = Math.floor(t / 3600);
  var m = Math.floor((t % 3600) / 60);
  var s = (t % 3600) % 60;
  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;
  localStorage.setItem("h", h);
  localStorage.setItem("m", m);
  localStorage.setItem("s", s);
  document.getElementById("timer-main").innerText = `${
    localStorage.getItem("h") || "00"
  } : ${localStorage.getItem("m") || "00"} : ${
    localStorage.getItem("s") || "00"
  }`;
}
