const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "WOOOSSHHH ~";
  gif.src =
    "https://i.pinimg.com/originals/01/15/a2/0115a244a79e60739425cf41cc851048.gif";
});

noBtn.addEventListener("click", () => {
  question.innerHTML = "No, You already said 'yes' ";
  gif.src =
    "https://i.pinimg.com/originals/16/55/f8/1655f888a4c8f2063d2bbb7f9e08859f.gif";
});