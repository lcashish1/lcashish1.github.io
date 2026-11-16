
document.addEventListener("DOMContentLoaded", function () {
  const filters = [...document.querySelectorAll("[data-filter]")];
  const cards = [...document.querySelectorAll(".project-card[data-category]")];
  const count = document.querySelector("#project-count");
  filters.forEach((button) => {
    button.addEventListener("click", () => {
      const active = button.dataset.filter;
      filters.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      let shown = 0;
      cards.forEach((card) => {
        const visible = active === "all" || card.dataset.category.split(" ").includes(active);
        card.hidden = !visible;
        if (visible) shown += 1;
      });
      if (count) count.textContent = shown + (shown === 1 ? " project" : " projects");
    });
  });
  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());
});
