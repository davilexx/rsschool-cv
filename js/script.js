hljs.highlightAll();

const bg = document.querySelector(".main__bg");

window.addEventListener("scroll", () => {
  var scroll =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;
  bg.style.opacity = Math.max(0, Math.min(1, -scroll / 400 + 2));
});
