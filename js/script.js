const faq = document.querySelectorAll(".faq");

faq.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector("i");

    faq.forEach((otherQuestion) => {
      const otherAnswer = otherQuestion.nextElementSibling;
      const otherIcon = otherQuestion.querySelector("i");

      if (otherAnswer !== answer) {
        otherAnswer.style.display = "none";
        otherIcon.classList.remove("fa-circle-minus");
        otherIcon.classList.add("fa-circle-plus");
      }
    });

    if (answer.style.display === "none" || !answer.style.display) {
      answer.style.display = "block";
      icon.classList.remove("fa-circle-plus");
      icon.classList.add("fa-circle-minus");
    } else {
      answer.style.display = "none";
      icon.classList.remove("fa-circle-minus");
      icon.classList.add("fa-circle-plus");
    }
  });
});

// I consider only a single image will change, so I do it static way.

const business_next = document.getElementById("business-next");
const business_prev = document.getElementById("business-prev");
const brands_next = document.getElementById("brands-next");
const brands_prev = document.getElementById("brands-prev");
const business_last_img = document.getElementById("business-last-img");
const business_first_img = document.getElementById("business-first-img");
const brands_last_img = document.getElementById("brands-last-img");
const brands_first_img = document.getElementById("brands-first-img");

business_next.addEventListener("click", () => {
  business_first_img.style.display = "none";
  business_last_img.style.display = "flex";
  business_next.style.display = "none";
  business_prev.style.display = "block";
});

business_prev.addEventListener("click", () => {
  business_last_img.style.display = "none";
  business_first_img.style.display = "flex";
  business_next.style.display = "block";
  business_prev.style.display = "none";
});

brands_next.addEventListener("click", () => {
  brands_first_img.style.display = "none";
  brands_last_img.style.display = "flex";
  brands_next.style.display = "none";
  brands_prev.style.display = "block";
});

brands_prev.addEventListener("click", () => {
  brands_last_img.style.display = "none";
  brands_first_img.style.display = "flex";
  brands_prev.style.display = "none";
  brands_next.style.display = "block";
});

function showNavlinks(){
    const navLinks = document.getElementById("links-for-mobile");
    if (navLinks.style.display === "block") {
        navLinks.style.display = "none";
      } else {
        navLinks.style.display = "block";
      }
}