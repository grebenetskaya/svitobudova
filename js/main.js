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
const cookieBanner = document.getElementById("cookieBanner");
const acceptCookies = document.getElementById("acceptCookies");
const declineCookies = document.getElementById("declineCookies");

if (cookieBanner) {
  const cookieChoice = localStorage.getItem("svitobudovaCookieChoice");

  if (!cookieChoice) {
    cookieBanner.classList.add("is-visible");
  }

  if (acceptCookies) {
    acceptCookies.addEventListener("click", function () {
      localStorage.setItem("svitobudovaCookieChoice", "accepted");
      cookieBanner.classList.remove("is-visible");
    });
  }

  if (declineCookies) {
    declineCookies.addEventListener("click", function () {
      localStorage.setItem("svitobudovaCookieChoice", "declined");
      cookieBanner.classList.remove("is-visible");
    });
  }
}

// Contact form demo
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you. This is a demo form, so no message was actually sent.");
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
    checkoutForm.style.display = "none";
    checkoutSuccess.classList.add("is-shown");
  });
}
