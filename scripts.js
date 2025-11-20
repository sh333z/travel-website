// Basic UI interactions and form submit (AJAX)
document.addEventListener('DOMContentLoaded', () => {

  // mobile menu
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  menuToggle?.addEventListener('click', () => {
    mobileNav.hidden = !mobileNav.hidden;
  });

  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // package buttons open contact form and preselect
  document.querySelectorAll('[data-package]').forEach(btn => {
    btn.addEventListener('click', () => {
      const pkg = btn.getAttribute('data-package');
      window.location.hash = '#contact';
      const sel = document.getElementById('packageSelect');
      if (sel) { sel.value = pkg; sel.focus(); }
    });
  });

  // contact form via fetch to backend
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      formStatus.textContent = 'Sending...';
      const data = new FormData(contactForm);
      try {
        const res = await fetch(contactForm.action, {
          method: 'POST',
          body: data
        });
        if (res.ok) {
          formStatus.textContent = 'Thanks! We received your request. We will contact you within 24 hours.';
          contactForm.reset();
        } else {
          const txt = await res.text();
          formStatus.textContent = 'Error: ' + (txt || res.statusText);
        }
      } catch (err) {
        formStatus.textContent = 'Network error. Please try again.';
      }
    });
  }

  // quick search
  const quickSearch = document.getElementById('quickSearch');
  if (quickSearch) {
    quickSearch.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = document.getElementById('where').value.trim();
      if (!q) { alert('Please enter a destination'); return; }
      alert('Searching packages for: ' + q);
    });
  }
});

// dropdown menu
document.querySelector(".menu-btn").onclick = () => {
  const menu = document.getElementById("dropdownMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
};

// popup form
function openForm(service) {
  document.getElementById("popup-form").style.display = "flex";
  const formBox = document.getElementById("form-box");

  // SHOW VISA OPTIONS ONLY WHEN USER CLICKS "Visa Service"
  if (service === "Visa Service") {
    formBox.innerHTML = `
      <h2>Select Visa Type</h2>
      <button onclick="openForm('Saudi Arabia Visa')">Saudi Arabia Visa</button>
      <button onclick="openForm('Oman Visa')">Oman Visa</button>
      <button onclick="openForm('UAE Visa')">UAE Visa</button>
      <button onclick="openForm('Armenia Visa')">Armenia Visa</button>
      <button onclick="openForm('Bahrain Visa')">Bahrain Visa</button>
      <button onclick="closeForm()" style="background:red;margin-top:10px;">Close</button>
    `;
    return;
  }

  // ALL VISA TYPES → SMALL FORM
  if (service.includes("Visa")) {
    formBox.innerHTML = `
      <h2>${service}</h2>
      <input type="text" placeholder="Your Name">
      <input type="text" placeholder="Phone Number">
      <input type="text" placeholder="Email">
      <input type="text" value="${service}" readonly>
      <button onclick="sendForm()">Submit</button>
      <button onclick="closeForm()" style="background:red;margin-top:10px;">Close</button>
    `;
    return;
  }

  // OTHER SERVICES → NORMAL FORM
  formBox.innerHTML = `
    <h2>${service}</h2>
    <input type="text" placeholder="Your Name">
    <input type="text" placeholder="Phone Number">
    <input type="text" placeholder="Email">
    <input type="text" placeholder="Details / Requirements">
    <button onclick="sendForm()">Submit</button>
    <button onclick="closeForm()" style="background:red;margin-top:10px;">Close</button>
  `;
}

// OPEN PASSPORT IMAGE
function openPassportImage() {
  window.open("pass-srvc.png", "_blank"); // change filename if needed
}
