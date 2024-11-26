// window.addEventListener("load", () => {
//   const autoPlaySound = new Audio("./background_sound/Pasilyo.mp3");
//   autoPlaySound.loop = true;
//   autoPlaySound.play();
// });

window.addEventListener("load", () => {
  const autoPlaySound = new Audio("./background_sound/Pasilyo.mp3");

  autoPlaySound.loop = true;

  document.body.addEventListener("click", () => {
    autoPlaySound.play();
  });

  localStorage.setItem("userInteracted", "true");

  if (localStorage.getItem("userInteracted")) {
    autoPlaySound.play();
  }
});
