function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function addName() {
  const inputText = document.getElementById("myInput").value;
      const outputElement = document.getElementById("output");
      outputElement.textContent = inputText;
}