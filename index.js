function buy() {
  let name = prompt("What's your name?");
  let email = prompt("What's your email?");

  if (name === "" || email === "") {
    alert("It looks like you forgot to add your name or email. 😣");
  } else {
    alert(
      "Thank you, " +
        name +
        "! We'll be in touch soon to help you build your own little jungle. 🌳"
    );
  }
}
let buyButton = document.querySelector(".buy-button");
buyButton.addEventListener("click", buy);
