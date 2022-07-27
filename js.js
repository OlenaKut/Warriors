function buy() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");

  alert(
    "Thank you " +
      name +
      " ! Our manager will contact you as soon as possible. " +
      "You are cool 🐾"
  );
}
let buyButton = document.querySelector(".buy-button");
buyButton.addEventListener("click", buy);
