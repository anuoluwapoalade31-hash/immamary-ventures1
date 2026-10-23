const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
const money = value => new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(value);
function updateEstimate(event) {
  if (event) event.preventDefault();
  const fuel = Math.max(0, Number(document.getElementById('fuel').value) || 0);
  const offset = Math.min(100, Math.max(0, Number(document.getElementById('offset').value) || 0));
  const monthly = fuel * offset / 100;
  document.getElementById('monthly-result').textContent = money(monthly);
  document.getElementById('annual-result').textContent = money(monthly * 12);
}
document.getElementById('savings-form').addEventListener('submit', updateEstimate);
document.getElementById('fuel').addEventListener('input', updateEstimate);
document.getElementById('offset').addEventListener('input', updateEstimate);
document.getElementById('year').textContent = new Date().getFullYear();
updateEstimate();
