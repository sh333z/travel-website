// ---------------------------------------------
// MOBILE MENU
// ---------------------------------------------
const menuBtn = document.querySelector(".menu-btn");
const dropdown = document.getElementById("dropdownMenu");

menuBtn.onclick = () => {
  dropdown.classList.toggle("open");
};

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) dropdown.classList.remove("open");
});

// ---------------------------------------------
// YEAR
// ---------------------------------------------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------------------------------------------
// POPUP FORM
// ---------------------------------------------
function openForm(service) {
  const popup = document.getElementById("popup-form");
  const box = document.getElementById("form-box");

  popup.style.display = "flex";

  box.innerHTML = `
    <h2>${service}</h2>
    <input type="text" placeholder="Your Name">
    <input type="text" placeholder="Phone Number">
    <input type="text" placeholder="Email">
    <input type="text" value="${service}" readonly>
    <button onclick="sendForm()">Submit</button>
    <button onclick="closeForm()" style="background:red;margin-top:10px;">Close</button>
  `;
}

function closeForm() {
  document.getElementById("popup-form").style.display = "none";
}

function sendForm() {
  alert("Submitted!");
  closeForm();
}

// ---------------------------------------------
// OPEN IMAGE WINDOWS
// ---------------------------------------------
function openPassportImage() {
  window.open("pass-srvc.png", "_blank");
}

function openAirTab() {
  document.getElementById("airTab").style.display = "flex";
}

function closeAirTab() {
  document.getElementById("airTab").style.display = "none";
}
