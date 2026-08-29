const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');
const reportForm = document.getElementById('report-form');
const reportConfirmation = document.getElementById('report-confirmation');
const auditForm = document.getElementById('audit-form');
const auditTotal = document.getElementById('audit-total');
const auditTotalAmount = document.getElementById('audit-total-amount');
const auditVerdict = document.getElementById('audit-verdict');
const decreeButton = document.getElementById('decree-button');
const decreeOutput = document.getElementById('decree-output');
const decreeText = document.getElementById('decree-text');

const decrees = [
  'All boxes shall henceforth be checked twice.',
  'Naptime may not be interrupted for any reason, including emergencies of the highest order.',
  'The sunbeam is a right, not a privilege.',
  'Treats shall be distributed on a purely voluntary schedule, which is to say, upon demand.',
  'Every laptop keyboard is hereby declared territorial ground.',
  'Meetings shall be conducted entirely from atop the conference table.',
];

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

function calculateFines(event) {
  event.preventDefault();
  const checked = document.querySelectorAll('#audit-form input:checked');
  const total = Array.from(checked).reduce((sum, box) => sum + Number(box.value), 0);
  auditTotalAmount.textContent = '$' + total;
  auditVerdict.textContent = total === 0
    ? 'No penalties assessed. The Bureau acknowledges your exemplary conduct.'
    : 'Payment is due to the Bureau of Assessment Fees. Please allow 2\u20133 business days (realistically, never).';
  auditTotal.classList.remove('hidden');
  auditTotal.focus();
}

// Picks a random decree and displays it in the proclamation panel
function issueDecree() {
  const index = Math.floor(Math.random() * decrees.length);
  decreeText.textContent = decrees[index];
  decreeOutput.classList.remove('hidden');
  decreeOutput.focus();
}

function init() {
  navToggle.addEventListener('click', toggleNav);
  reportForm.addEventListener('submit', submitReport);
  auditForm.addEventListener('submit', calculateFines);
  decreeButton.addEventListener('click', issueDecree);
  document.querySelectorAll('.notice-header').forEach((header) => {
    header.addEventListener('click', () => toggleNotice(header));
  });
}

init();