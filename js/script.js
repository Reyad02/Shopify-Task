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
