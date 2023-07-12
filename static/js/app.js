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

const questions = document.querySelectorAll(".faq__question");
const plusIcon = document.querySelector(".plus-icon");
const minusIcon = document.querySelector(".minus-icon");
// const text = document.querySelectorAll(".faq__text")

questions.forEach(function(question){
  const btn = question.querySelector(".faq__btn")
    // question.addEventListener("click", function (e){
       
    // plusIcon.addEventListener("click",function (e) {
    //   e.currentTarget.classList.toggle("hide")
    //   text.classList.toggle('hide');
    
    // })
    // minusIcon.addEventListener("click",function (e) {
    //   e.currentTarget.classList.toggle("hide")
    //   text.classList.toggle('hide');
    
    // })
    
    // })
    btn.addEventListener("click",()=>{
      questions.forEach(function(item){
         
        if (item !== question){
          item.classList.remove("show-text");
        }
       })
  
      question.classList.toggle("show-text");
    })
})


const navBtn = document.getElementById("nav__btn");
const navBlock = document.getElementById("nav__side");
const date = (document.querySelector(
  ".year"
).innerHTML = new Date().getFullYear());



navBtn.addEventListener("click", () => {
    navBtn.classList.toggle("hide")
    navBlock.classList.toggle("hide")

})
navBlock.addEventListener("click", () => {
    navBtn.classList.toggle("hide")
    navBlock.classList.toggle("hide")

})