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

  // quick search (client-side demo)
  const quickSearch = document.getElementById('quickSearch');
  if (quickSearch) {
    quickSearch.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = document.getElementById('where').value.trim();
      if (!q) { alert('Please enter a destination'); return; }
      // In production,POST to backend or go to search results
      alert('Searching packages for: ' + q);
    });
  }
});
document.querySelector(".menu-btn").onclick = () => {
    document.querySelector(".dropdown-menu").style.display =
      document.querySelector(".dropdown-menu").style.display === "block"
        ? "none"
        : "block";
};
// popup form
function openForm(service){
  document.getElementById("popup-form").style.display = "flex";

  // If user clicked "Apply Visa"
  if (service === "Visa Service") {
      document.getElementById("form-title").innerText = "Choose Visa Type";
      document.getElementById("visa-box").style.display = "block";  // Show visa options
      return;
  }

  // Normal services
  document.getElementById("form-title").innerText = service;
  document.getElementById("visa-box").style.display = "none";
}

function selectVisa(type){
  document.getElementById("visaType").value = type;
}

function closeForm(){
  document.getElementById("popup-form").style.display = "none";
}

function sendForm(){
  alert("Thank you! Your request has been submitted.");
  closeForm();
}
