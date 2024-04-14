const rating = document.querySelectorAll(".rating");
const submitButton = document.querySelector("button");
const selectedChoice = document.getElementById("submitted");
const activeColour = "bg-gray-900";
const defaultColour = "bg-gray-500";
const visible = "visible";
const hidden = "hidden";
let message = document.getElementById("thankyou");

rating.forEach((number) => {
  number.addEventListener("click", () => {
    //Remove Active Colour
    message = number.innerText;
    rating.forEach((n) => {
      n.classList.add(defaultColour);
      n.classList.remove(activeColour);
    });
    //Add Active Colour
    number.classList.remove(defaultColour);
    number.classList.add(activeColour);
  });
});

//Submiting Rating
submitButton.addEventListener("click", () => {
  selectedChoice.classList.remove(hidden);
  selectedChoice.classList.add(visible);
  document.getElementById(
    "thankyou"
  ).innerHTML = `You selected ${message} out of 5.`;
});
