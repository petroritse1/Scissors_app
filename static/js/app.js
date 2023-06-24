//  ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link => {
  link.addEventListener("click", e => {
    // prevent default
    e.preventDefault();
    links.classList.remove("show-links");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    //
    let position = element.offsetTop - 62;

    window.scrollTo({
      left: 0,
      // top: element.offsetTop,
      top: position,
      behavior: "smooth"
    });
  });
});



const navBtn = document.getElementById("nav__btn");
const navBlock = document.getElementById("nav__block");

navBtn.addEventListener("click", () => {
    navBtn.classList.toggle("hide")
    navBlock.classList.toggle("hide")

})
navBlock.addEventListener("click", () => {
    navBtn.classList.toggle("hide")
    navBlock.classList.toggle("hide")

})