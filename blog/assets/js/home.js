
var date = new Date();
console.log((date.getHours() > 21 || date.getHours() < 6));
if ((date.getHours() >= 21 || date.getHours() < 6)) {
  document.documentElement.setAttribute('data-theme', 'dark');
  document.getElementById('top-logo').src='../assets/media/icons/logo_v2.svg';
}
