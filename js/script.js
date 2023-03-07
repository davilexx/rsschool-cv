hljs.highlightAll();

const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");
const links = document.querySelectorAll(".list__link");

const toggleMenu = () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
};

burger.addEventListener("click", () => {
  toggleMenu();
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    toggleMenu();
  });
});

window.addEventListener("scroll", () => {
  const removeHash = () => {
    history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search
    );
  };
  removeHash();
});
