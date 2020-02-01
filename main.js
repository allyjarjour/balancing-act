// hide banner on click ------------------

var welcomeButton = document.getElementById('x-button');
var welcomeBanner = document.querySelector('#welcome-banner');

welcomeButton.addEventListener("click", hideBanner)

function hideBanner() {
  welcomeBanner.classList.add('hidden');
}

// toggle nav bar -------------------------

var walletButton = document.getElementById('wallet-button');
var dashboardButton = document.getElementById('dashboard-button');
var profileButton =  document.getElementById('profile-button');

function toggleWallet() {
  walletButton.classList.toggle("toggle-highlight");
  profileButton.classList.remove("toggle-highlight");
  dashboardButton.classList.remove("toggle-highlight");
}

function toggleProfile() {
  profileButton.classList.toggle("toggle-highlight");
  dashboardButton.classList.remove("toggle-highlight");
  walletButton.classList.remove("toggle-highlight");
}

function toggleDashboard() {
  dashboardButton.classList.toggle("toggle-highlight");
  walletButton.classList.remove("toggle-highlight");
  profileButton.classList.remove("toggle-highlight");
}

// hide and add elements when toggling nav bar

var main = document.querySelector('.main');
var table = document.querySelector('.table');
var tableButton = document.querySelector('.new-transaction-button');
var tableTitle = document.querySelector('.trans-title');
var tableSection = document.querySelector('section.recent-transactions');

walletButton.addEventListener("click", hideForTransButton)

function hideForTransButton () {
  main.classList.add('hidden');
  tableButton.classList.add('hidden');
  table.classList.add('hidden');
  tableTitle.classList.add('hidden');
  tableSection.classList.add('hidden');
}

// Bring back elements when clicking back to Dashboard

dashboardButton.addEventListener("click", addContent)

function addContent () {
  main.classList.remove("hidden");
  tableButton.classList.remove('hidden');
  table.classList.remove('hidden');
  tableTitle.classList.remove('hidden');
  tableSection.classList.remove('hidden');
}
