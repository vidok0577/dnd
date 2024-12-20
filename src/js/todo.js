export const addCard = document.querySelectorAll(".add-card");

addCard.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target);
  });
});
