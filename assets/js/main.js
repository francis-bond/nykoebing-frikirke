document.addEventListener("DOMContentLoaded", () => {
  // ---- Language toggle ----
  const savedLang = localStorage.getItem("lang") || "da";
  let currentLang = savedLang;

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);

    document.querySelectorAll("[data-lang-key]").forEach((el) => {
      const key = el.getAttribute("data-lang-key");
      if (LANG[lang] && LANG[lang][key]) {
        if (el.hasAttribute("data-lang-html")) {
          el.innerHTML = LANG[lang][key];
        } else {
          el.textContent = LANG[lang][key];
        }
      }
    });

    // Update toggle buttons
    document.querySelectorAll(".lang-toggle").forEach((btn) => {
      btn.textContent = lang === "da" ? "EN" : "DA";
    });
  }

  // Toggle button click
  document.querySelectorAll(".lang-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLanguage(currentLang === "da" ? "en" : "da");
    });
  });

  // Apply on load
  applyLanguage(currentLang);

  // ---- Hamburger menu ----
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
      hamburger.setAttribute(
        "aria-expanded",
        mobileMenu.classList.contains("open")
      );
    });

    // Close on link click
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---- Scroll to top on page load ----
  window.scrollTo({ top: 0, behavior: "smooth" });

  // ---- AOS init ----
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 80,
    });
  }
});
