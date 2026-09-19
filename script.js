const toggleButton = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

toggleButton.addEventListener('click', () => {
  if (htmlElement.getAttribute('data-theme') === 'dark') {
    htmlElement.removeAttribute('data-theme');
  } else {
    htmlElement.setAttribute('data-theme', 'dark');
  }
});





function pokazZegar() {
    let teraz = new Date();
    let czas = teraz.toLocaleTimeString();
    document.getElementById("zegar").innerText = czas;
}

setInterval(pokazZegar, 1000);