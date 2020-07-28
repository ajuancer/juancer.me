// Dark theme switcher.
var date = new Date();
if ((date.getHours() > 21 || date.getHours() < 6)) {
  document.documentElement.setAttribute('data-theme', 'dark');
  document.getElementById('top-logo').src='media/icons/logo_v2.svg';
}

// Click to copy mail
new ClipboardJS('.mail');

// Tooltip about mail.
const mail_button = document.querySelector('#mail-button');
const tooltip = document.querySelector('#mail-tooltip');

let popperInstance = null;

function create() {
  popperInstance = Popper.createPopper(mail_button, tooltip, {
    modifiers: [{
      name: 'offset',
      options: {
        offset: [0, 8],
      },
    }, ],
  });
}

function destroy() {
  if (popperInstance) {
    popperInstance.destroy();
    popperInstance = null;
  }
}

function show() {
  tooltip.setAttribute('data-show', '');
  create();
}

function hide() {
  tooltip.removeAttribute('data-show');
  destroy();
}

const showEvents = ['mouseenter', 'focus'];
const hideEvents = ['mouseleave', 'blur'];

showEvents.forEach(event => {
  mail_button.addEventListener(event, show);
});

hideEvents.forEach(event => {
  mail_button.addEventListener(event, hide);
});
