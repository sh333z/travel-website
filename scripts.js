// basic UI
document.addEventListener('DOMContentLoaded', () => {
  // year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // mobile dropdown
  const menuBtn = document.querySelector('.menu-btn');
  const dropdown = document.getElementById('dropdownMenu');
  menuBtn?.addEventListener('click', () => {
    const open = dropdown.hasAttribute('hidden');
    if (open) {
      dropdown.removeAttribute('hidden');
      menuBtn.setAttribute('aria-expanded', 'true');
      dropdown.classList.add('open');
    } else {
      dropdown.setAttribute('hidden', '');
      menuBtn.setAttribute('aria-expanded', 'false');
      dropdown.classList.remove('open');
    }
  });

  // close dropdown on resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      dropdown.setAttribute('hidden', '');
      dropdown.classList.remove('open');
      menuBtn?.setAttribute('aria-expanded', 'false');
    }
  });

  // contact form (simulated)
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    formStatus.textContent = 'Sending...';
    setTimeout(() => {
      formStatus.textContent = 'Thanks! We received your request.';
      contactForm.reset();
    }, 700);
  });

  // close sheet with ESC
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') {
      closeAirSheet();
      closePopup();
    }
  });

  // click outside sheet to close
  document.addEventListener('click', (e) => {
    const sheet = document.getElementById('airSheet');
    if (!sheet) return;
    if (!sheet.classList.contains('show')) return;
    const panel = sheet.querySelector('.air-sheet-panel');
    if (!panel) return;
    if (!panel.contains(e.target)) {
      closeAirSheet();
    }
  });
});

// popup modal functions (generic)
function openForm(service) {
  const popup = document.getElementById('popup-form');
  const box = document.getElementById('form-box');
  popup.style.display = 'flex';
  box.innerHTML = `
    <h2>${service}</h2>
    <input type="text" placeholder="Your name"><br>
    <input type="text" placeholder="Phone"><br>
    <input type="email" placeholder="Email"><br>
    <button onclick="closeForm()">Close</button>
  `;
}

function closeForm() {
  const popup = document.getElementById('popup-form');
  popup.style.display = 'none';
}

function closePopup() { closeForm(); }

// passport image
function openPassportImage() {
  window.open('pass-srvc.png', '_blank');
}

// AIR SHEET (slide-up)
let lastActive = null;
function openAirSheet(triggerEl) {
  lastActive = triggerEl || document.activeElement;
  const sheet = document.getElementById('airSheet');
  if (!sheet) return;
  sheet.classList.add('show');
  sheet.setAttribute('aria-hidden', 'false');
  const panel = sheet.querySelector('.air-sheet-panel');
  panel?.focus();
}

function closeAirSheet() {
  const sheet = document.getElementById('airSheet');
  if (!sheet) return;
  sheet.classList.remove('show');
  sheet.setAttribute('aria-hidden', 'true');
  // restore focus
  try { lastActive?.focus(); } catch(e){}
}
function openAirImages() {
  const newTab = window.open("", "_blank");

  newTab.document.write(`
    <html>
    <head>
      <title>Air Ticketing Details</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          background: white;
        }
        img {
          width: 100%;
          margin-bottom: 10px;
        }
      </style>
    </head>
    <body>
      <img src="air1.png">
      <img src="air2.png">
    </body>
    </html>
  `);

  newTab.document.close();
}
