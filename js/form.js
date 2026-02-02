document.addEventListener("DOMContentLoaded", function () {
  var formValid = document.getElementById("good_button");
  var contenair = document.getElementById("container-form");

  formValid.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("click");

    var answer = document.getElementById("answer").value;
    var imgState = document.getElementById("win_img");
    if (answer === "merci!") {
      console.log(answer);
      imgState.classList.remove("hidden");
    } else {
      contenair.classList.add("shake");
    }
  });

  contenair.addEventListener("animationend", () => {
    contenair.classList.remove("shake");
  });
});
