
(function () 
{
  const header = document.querySelector(".header");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = Array.from(document.querySelectorAll(".nav-link"));
  const toTop = document.querySelector(".to-top");
  const year = document.getElementById("year");

  // Set year
  if (year) year.textContent = new Date().getFullYear();

  // Sticky header + back-to-top
  function onScroll() {
    const y = window.scrollY || document.documentElement.scrollTop;

    if (y > 10) header.classList.add("scrolled");
    else header.classList.remove("scrolled");

    if (toTop) {
      if (y > 500) toTop.classList.add("show");
      else toTop.classList.remove("show");
    }

    updateActiveNav();
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu when clicking a link (mobile)
    navMenu.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (!a) return;
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });

    // Close menu if clicking outside
    document.addEventListener("click", (e) => {
      if (window.innerWidth > 740) return;
      const clickedInside = navMenu.contains(e.target) || navToggle.contains(e.target);
      if (!clickedInside) {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Active nav highlight based on section in view
  function updateActiveNav() {
    const sections = navLinks
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    let currentId = "home";
    const offset = 120; // header offset

    for (const sec of sections) {
      const top = sec.getBoundingClientRect().top + window.scrollY;
      if (window.scrollY + offset >= top) currentId = sec.id;
    }

    navLinks.forEach((l) => {
      const id = l.getAttribute("href").replace("#", "");
      l.classList.toggle("active", id === currentId);
    });
  }

  // // Skills animation (IntersectionObserver)
  // const fills = document.querySelectorAll(".fill[data-fill]");
  // const skillsSection = document.querySelector("#skills");

  // if (skillsSection && fills.length) {
  //   const io = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (!entry.isIntersecting) return;

  //         fills.forEach((el) => {
  //           const v = Number(el.dataset.fill || 0);
  //           el.style.width = Math.max(0, Math.min(100, v)) + "%";
  //         });

  //         io.disconnect();
  //       });
  //     },
  //     { threshold: 0.25 }
  //   );

  //   io.observe(skillsSection);
  // }
// Skills animation (IntersectionObserver)
const fills = document.querySelectorAll(".fill[data-fill]");

if (fills.length) {
  const skillObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const bar = entry.target;
        const value = bar.getAttribute("data-fill");
        bar.style.width = value + "%";

        observer.unobserve(bar);
      });
    },
    { threshold: 0.4 }
  );

  fills.forEach((fill) => {
    skillObserver.observe(fill);
  });
}
  // Project filtering
  const chips = document.querySelectorAll(".chip[data-filter]");
  const projects = document.querySelectorAll(".project[data-cat]");

  function applyFilter(filter) {
    projects.forEach((p) => {
      const cat = p.getAttribute("data-cat");
      const show = filter === "all" || filter === cat;
      p.classList.toggle("hidden", !show);
    });
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      applyFilter(chip.getAttribute("data-filter"));
    });
  });

  // Contact form demo (UI only)
  const form = document.getElementById("contactForm");
  const hint = document.getElementById("formHint");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (hint) {
        hint.textContent =
          "This is demo UI. Connect Formspree/Getform endpoint in form action to receive emails.";
      }
      form.reset();
    });
  }
})();


  
  document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");

  if (!themeToggle) {
    console.error("Theme toggle button not found");
    return;
  }

  // Load saved theme or default
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  themeToggle.textContent = savedTheme === "light" ? "🌙" : "🌑";

  themeToggle.addEventListener("click", function () {
    const currentTheme =
      document.documentElement.getAttribute("data-theme");

    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    themeToggle.textContent = newTheme === "light" ? "🌙" : "🌑";
  });
});

// Scroll Reveal using JS
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("show");
    }
  });
}

// Run on scroll
window.addEventListener("scroll", revealOnScroll);

// Run once on page load
revealOnScroll();

// const modal = document.getElementById("projectModal");
// const modalTitle = document.getElementById("modalTitle");
// const modalDesc = document.getElementById("modalDesc");
// const modalLive = document.getElementById("modalLive");
// const modalGithub = document.getElementById("modalGithub");
// const closeModal = document.getElementById("closeModal");

// document.querySelectorAll(".open-modal").forEach(btn => {
//   btn.addEventListener("click", () => {
//     modalTitle.textContent = btn.dataset.title;
//     modalDesc.textContent = btn.dataset.desc;
//     modalLive.href = btn.dataset.live;
//     modalGithub.href = btn.dataset.github;

//     modal.classList.add("show");
//   });
// });

// closeModal.addEventListener("click", () => {
//   modal.classList.remove("show");
// });

// modal.addEventListener("click", e => {
//   if (e.target === modal) modal.classList.remove("show");
// });