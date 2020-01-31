var welcomeButton = document.getElementById('x-button');
var welcomeBanner = document.querySelector('#welcome-banner');

welcomeButton.addEventListener("click", hideBanner)
// welcomeBanner.addEventListener('click', remove.class(welcome-banner));

function hideBanner() {
  // console.log("yes");
  welcomeBanner.classList.add('hidden');
}

// welcomeButton.addEventListener('click', span.id.remove('welcome-banner');

// span.classList.click("hidden");
  // welcomeButton.addEventListener('click', span.id.remove('welcome-banner');
