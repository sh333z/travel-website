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
// --- IMAGE VIEWER (shared for Umrah and Air Ticketing) ---

let viewerImages = [];      
let currentViewerIndex = 0; 

// Open Umrah Viewer
function openUmrahViewer() {
    viewerImages = ["umra1.png", "umra2.png"];
    currentViewerIndex = 0;

    document.getElementById("viewerImage").src = viewerImages[currentViewerIndex];
    document.getElementById("umrahViewer").style.display = "flex";
}

// Open Air Ticket Viewer
function openAirViewer() {
    viewerImages = ["air1.png", "air2.png", "air3.png"];
    currentViewerIndex = 0;

    document.getElementById("viewerImage").src = viewerImages[currentViewerIndex];
    document.getElementById("umrahViewer").style.display = "flex";
}

// Close viewer (same for both)
function closeUmrahViewer() {
    document.getElementById("umrahViewer").style.display = "none";
}

// Next image
function nextUmrah() {
    currentViewerIndex++;
    if (currentViewerIndex >= viewerImages.length)
        currentViewerIndex = 0;

    document.getElementById("viewerImage").src = viewerImages[currentViewerIndex];
}

// Previous image
function prevUmrah() {
    currentViewerIndex--;
    if (currentViewerIndex < 0)
        currentViewerIndex = viewerImages.length - 1;

    document.getElementById("viewerImage").src = viewerImages[currentViewerIndex];
}
