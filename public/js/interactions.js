const backToTop = document.getElementById("back-to-top");
if (backToTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTop.classList.remove("hidden");
      backToTop.classList.add("flex");
    } else {
      backToTop.classList.add("hidden");
      backToTop.classList.remove("flex");
    }
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navToggleIconOpen = document.getElementById("nav-toggle-icon-open");
const navToggleIconClose = document.getElementById("nav-toggle-icon-close");
if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("hidden") === false;
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    navToggleIconOpen?.classList.toggle("hidden", isOpen);
    navToggleIconClose?.classList.toggle("hidden", !isOpen);
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.add("hidden");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Abrir menú");
      navToggleIconOpen?.classList.remove("hidden");
      navToggleIconClose?.classList.add("hidden");
    });
  });
}
