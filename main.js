var welcomeButton = document.getElementById('x-button');
var welcomeBanner = document.querySelector('#welcome-banner');

welcomeButton.addEventListener("click", hideBanner)

function hideBanner() {
  welcomeBanner.classList.add('hidden');
}
