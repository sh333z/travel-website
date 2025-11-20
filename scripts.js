/* Root and base */
:root{
  --bg: #FFF9E6;
  --card: #ffffff;
  --primary: #0D6EFD;
  --accent: #FF8A00;
  --text: #1F2937;
  --muted: #6B7280;
  --radius: 10px;
  --container: 1100px;
  --gap: 1rem;
  font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}

* { box-sizing: border-box; }
html,body { height:100%; margin:0; padding:0; -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale; }
body { background: var(--bg); color:var(--text); }

/* Container */
.container { max-width: var(--container); margin: 0 auto; padding: 1rem; }

/* HEADER */
.site-header { background: transparent; position: sticky; top:0; z-index:1200; }
.header-inner { display:flex; align-items:center; justify-content:space-between; gap:16px; padding:14px 1rem; }

/* Brand */
.brand { display:flex; align-items:center; gap:12px; text-decoration:none; color:var(--text); }
.logo { width:56px; height:56px; object-fit:contain; border-radius:8px; }
.brand-text { font-weight:700; font-family:"Poppins",sans-serif; font-size:1.05rem; }

/* Desktop nav */
.main-nav { display:flex; gap:12px; align-items:center; }
.main-nav a { text-decoration:none; color:var(--text); padding:8px 10px; border-radius:8px; font-weight:600; }
.main-nav a:hover { background: rgba(0,0,0,0.06); }

/* Menu button (mobile) */
.menu-btn { display:none; background:none; border:none; font-size:22px; cursor:pointer; }

/* MOBILE NAV (slide-in) */
.mobile-nav {
  position:fixed; inset:0; z-index:1400; background:rgba(0,0,0,0.45); display:flex; justify-content:flex-end;
}
.mobile-nav .mobile-nav-links {
  width:280px; max-width:85%; background:var(--card); padding:18px; box-shadow:-6px 0 24px rgba(0,0,0,0.12);
  display:flex; flex-direction:column; gap:10px;
}
.close-mobile { background:none; border:none; font-size:20px; align-self:flex-end; cursor:pointer; margin-bottom:6px; }

/* Title and subtitle */
.main-title { text-align:center; margin:18px 0 8px; }
.site-logo { width:300px; max-width:90%; display:block; margin:0 auto; }
.subtitle { text-align:center; color:var(--muted); margin-bottom:18px; font-size:1rem; }

/* SERVICES GRID (cards) */
.services {
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap:20px;
  padding: 20px;
  max-width:1200px;
  margin: 0 auto 30px;
}
.service-box {
  background:var(--card);
  padding:14px;
  border-radius:12px;
  box-shadow:0 6px 20px rgba(16,24,40,0.06);
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  min-height:300px;
}
.service-image { width:100%; height:160px; object-fit:cover; border-radius:8px; }
.service-content { padding:10px 0; flex:1; }
.service-actions { display:flex; gap:8px; justify-content:center; padding-top:8px; }

/* Buttons */
button, .btn {
  padding:9px 16px;
  border-radius:8px;
  border:none;
  background:var(--primary);
  color:white;
  cursor:pointer;
  font-weight:600;
}
button:hover { filter:brightness(0.95); }

/* popup (modal) */
.popup {
  position:fixed; inset:0; display:flex; justify-content:center; align-items:center;
  background: rgba(0,0,0,0.45); z-index:1600; padding:20px; visibility:visible;
}
.popup[aria-hidden="true"] { display:none; }
.popup-box { background:white; width:360px; max-width:95%; padding:20px; border-radius:10px; text-align:center; }
#form-box input, #form-box textarea, .contact-form input, .contact-form textarea {
  width:100%; padding:10px; margin-top:8px; border-radius:8px; border:1px solid #e6e6e6;
}

/* visa buttons */
.visa-list { display:grid; gap:8px; margin:10px 0 14px; }
.visa-btn { background:#f3f4f6; border-radius:6px; padding:8px; border:none; cursor:pointer; }

/* green-section (contact) */
.green-section {
  background: linear-gradient(180deg, #0f9d58 0%, #0e8b4c 100%);
  padding: 30px 20px;
  display:grid;
  grid-template-columns: 1fr 320px;
  gap:18px;
  align-items:start;
  color: #fff;
  border-radius:12px;
}
.green-section h2, .green-section label, .green-section p, .green-section h3 { color: #fff; }
.contact-form label { display:block; margin-top:8px; font-weight:600; color:#fff; }
.contact-form input, .contact-form textarea { background: rgba(255,255,255,0.95); color:#111; border:none; }

/* Office aside */
.office { background:rgba(255,255,255,0.06); padding:12px; border-radius:8px; }

/* services grid below */
.services-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:16px; margin-top:16px; }
.service { background: #fff; padding:12px; border-radius:10px; box-shadow:0 4px 12px rgba(0,0,0,0.06); }

/* footer */
.site-footer { margin-top:28px; padding:18px 0; }
.footer-inner { text-align:center; color:var(--muted); }

/* Responsive */
@media (max-width:980px) {
  .services-grid { grid-template-columns: 1fr 1fr; }
  .green-section { grid-template-columns: 1fr; }
  .main-nav { display:none; }
  .menu-btn { display:block; }
}
@media (max-width:640px) {
  .service-image { height:140px; object-fit:cover; }
  .services-grid { grid-template-columns: 1fr; }
  .header-inner { padding:10px 0.75rem; }
}
