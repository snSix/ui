function inflateBalloon() {
  const balloon = document.getElementById("balloon");
  const size = getComputedStyle(balloon).getPropertyValue("--size");
  balloon.style.setProperty("--size", parseFloat(size) + 0.2);
}

function resetBalloon() {
  const balloon = document.getElementById("balloon");
  balloon.style.setProperty("--size", 1);
}
