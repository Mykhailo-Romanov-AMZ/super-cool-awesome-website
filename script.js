const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');
const reportForm = document.getElementById('report-form');
const reportConfirmation = document.getElementById('report-confirmation');

function toggleNav() {
  const open = siteNav.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', String(open));
}

function submitReport(event) {
  event.preventDefault();
  reportForm.classList.add('hidden');
  reportConfirmation.classList.remove('hidden');
  reportConfirmation.focus();
}

function toggleNotice(header) {
  const notice = header.closest('.notice');
  const open = notice.classList.toggle('open');
  header.setAttribute('aria-expanded', String(open));
}

function init() {
  navToggle.addEventListener('click', toggleNav);
  reportForm.addEventListener('submit', submitReport);
  document.querySelectorAll('.notice-header').forEach((header) => {
    header.addEventListener('click', () => toggleNotice(header));
  });
}

init();