document.documentElement.classList.add("js");

const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector("#primary-menu");

function setMenuState(isOpen) {
  if (!menuButton || !menu) return;

  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuButton.classList.toggle("is-open", isOpen);
  menu.classList.toggle("is-open", isOpen);
}

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") !== "true";
  setMenuState(isOpen);
});

menu?.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    setMenuState(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton?.getAttribute("aria-expanded") === "true") {
    setMenuState(false);
    menuButton?.focus();
  }
});

document.addEventListener("click", (event) => {
  if (
    menuButton?.getAttribute("aria-expanded") === "true" &&
    !event.target.closest(".site-nav")
  ) {
    setMenuState(false);
  }
});

window.addEventListener(
  "resize",
  () => {
    if (window.innerWidth > 760) {
      setMenuState(false);
    }
  },
  { passive: true }
);

document.querySelectorAll("[data-contact]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = `mailto:${atob(link.dataset.contact)}`;
  });
});

// Closing on focus departure prevents an expanded menu from obscuring the page.
document.addEventListener("focusin", (event) => {
  if (menuButton?.getAttribute("aria-expanded") === "true" &&
      !event.target.closest(".site-nav")) {
    setMenuState(false);
  }
});
