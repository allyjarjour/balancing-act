// hide banner on click for dashboard-----

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

// hide elements for transactions page

var main = document.querySelector('.main');
var table = document.querySelector('.recent-trans-table');
var tableButton = document.querySelector('.new-transaction-button');
var tableTitle = document.querySelector('.trans-title');
var tableSection = document.querySelector('section.recent-transactions');
var siteTitle = document.querySelector('.site-title');
var transPageSection = document.querySelector('.reg-trans-table');
var transTitle = document.querySelector('.transactions-header');

walletButton.addEventListener("click", hideMainElements)

function hideMainElements () {
  main.classList.add('hidden');
  tableButton.classList.add('hidden');
  table.classList.add('hidden');
  tableTitle.classList.add('hidden');
  tableSection.classList.add('hidden');
  siteTitle.classList.add('hidden');
}

// Bring back elements when clicking back to Dashboard

dashboardButton.addEventListener("click", addDashElements)

function addDashElements () {
  main.classList.remove("hidden");
  tableButton.classList.remove('hidden');
  table.classList.remove('hidden');
  tableTitle.classList.remove('hidden');
  tableSection.classList.remove('hidden');
  siteTitle.classList.remove('hidden');
}

// Remove elements for profile page

profileButton.addEventListener("click", removeAllElements)

function removeAllElements() {
  main.classList.add('hidden');
  tableButton.classList.add('hidden');
  table.classList.add('hidden');
  tableTitle.classList.add('hidden');
  tableSection.classList.add('hidden');
  siteTitle.classList.add('hidden');
  transPageSection.classList.add('hidden');
  transTitle.classList.add('hidden');
}

// Bring back elements for transaction page

walletButton.addEventListener("click", addTransContent)

function addTransContent() {
  transPageSection.classList.remove('hidden');
  transTitle.classList.remove('hidden');
}

// Hide transaction content on reload for dashboard
// and once clicking back onto dashboard

window.onload = function hideTransOnload() {
  document.querySelector('.reg-trans-table').classList.add('hidden');
  document.querySelector('.transactions-header').classList.add('hidden');
};

dashboardButton.addEventListener("click", removeTransElements)

function removeTransElements() {
  transPageSection.classList.add('hidden');
  transTitle.classList.add('hidden');
}
