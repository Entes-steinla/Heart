window.addEventListener("load", () => {
  const autoPlaySound = new Audio("./background_sound/Pasilyo.mp3");
  autoPlaySound.loop = true;

  const checkbox = document.getElementById("checkbox");

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      autoPlaySound.play();
    } else {
      autoPlaySound.pause();
    }
  });
});
