document.addEventListener("DOMContentLoaded", function (event) {
  var thumbnailElement = document.getElementById("smart_thumbnail");
  var otherThumbnail = document.querySelectorAll(".to_change");
  // var imagesDAta = document.getElementById("devweb");

  //partie exigée
  if (thumbnailElement) {
    thumbnailElement.addEventListener("click", function () {
      console.log("tu tapes");
      if (thumbnailElement.className == "small") {
        thumbnailElement.className = "";
      } else {
        thumbnailElement.className = "small";
      }
    });
  }
  //ma création
  otherThumbnail.forEach(function (thumbnail) {
    thumbnail.addEventListener("click", function () {
      var imagesDAta = this.parentNode;
      if (this.classList.contains("small")) {
        this.classList.remove("small");
        this.classList.add("add_class");
        imagesDAta.removeAttribute("aria-describedby");
      } else {
        this.classList.add("small");
        this.classList.remove("add_class");
        imagesDAta.setAttribute("aria-describedby", imagesDAta.name);
      }
    });
  });
});
