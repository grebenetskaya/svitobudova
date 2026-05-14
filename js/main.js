// Mobile navigation
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Cookie banner
function initCookieBanner() {
  const cookieBanner = document.getElementById("cookieBanner");
  const acceptCookies = document.getElementById("acceptCookies");
  const declineCookies = document.getElementById("declineCookies");

  if (!cookieBanner || !acceptCookies || !declineCookies) {
    return;
  }

  const cookieChoice = localStorage.getItem("svitobudovaCookieChoice");

  if (!cookieChoice) {
    cookieBanner.classList.add("is-shown");

    setTimeout(function () {
      acceptCookies.focus();
    }, 100);
  }

  function closeCookieBanner(choice) {
    localStorage.setItem("svitobudovaCookieChoice", choice);
    cookieBanner.classList.remove("is-shown");
  }

  acceptCookies.addEventListener("click", function () {
    closeCookieBanner("accepted");
  });

  declineCookies.addEventListener("click", function () {
    closeCookieBanner("declined");
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCookieBanner);
} else {
  initCookieBanner();
}

// Contact form demo with aria-live status message
const contactForm = document.getElementById("contactForm");
const contactSuccess = document.getElementById("contactSuccess");

if (contactForm && contactSuccess) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    contactForm.hidden = true;
    contactSuccess.hidden = false;
    contactSuccess.focus();
  });
}

// Checkout form demo
const checkoutForm = document.getElementById("checkoutForm");
const checkoutSuccess = document.getElementById("checkoutSuccess");
const planSelect = document.getElementById("checkout-plan");
const paymentSection = document.getElementById("paymentSection");

if (planSelect && paymentSection) {
  function updatePaymentSection() {
    paymentSection.style.display = planSelect.value === "aspirant" ? "none" : "block";
  }

  planSelect.addEventListener("change", updatePaymentSection);
  updatePaymentSection();
}

if (checkoutForm && checkoutSuccess) {
  checkoutForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!checkoutForm.checkValidity()) {
      checkoutForm.reportValidity();
      return;
    }

    checkoutForm.style.display = "none";
    checkoutSuccess.classList.add("is-shown");
    checkoutSuccess.focus();
  });
}
