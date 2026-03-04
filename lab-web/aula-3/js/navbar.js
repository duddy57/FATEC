const navItems = document.querySelectorAll(".navbar__item");
const sections = document.querySelectorAll("section[id]");

function setActiveItem(sectionId) {
  navItems.forEach((item) => {
    const target = item.getAttribute("data-section");
    item.classList.toggle("is-active", target === sectionId);
  });
}

const observerOptions = {
  root: null,
  threshold: 0.4,
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setActiveItem(entry.target.id);
    }
  });
}, observerOptions);

sections.forEach((section) => sectionObserver.observe(section));
navItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();

    const targetId = item.getAttribute("href").replace("#", "");
    const targetSection = document.getElementById(targetId);

    if (!targetSection) return;

    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });

    setActiveItem(targetId);
  });
});

(function initActiveItem() {
  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.top < window.innerHeight) {
      setActiveItem(section.id);
      return;
    }
  }

  if (navItems.length > 0) {
    const firstSection = navItems[0].getAttribute("data-section");
    setActiveItem(firstSection);
  }
})();
