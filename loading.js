const loading = document.querySelector(".loading");
const scene = document.querySelector(".scene");
const mainScene = document.querySelector(".main-scene");

setTimeout(function () {
  loading.style.display = "none";
  scene.style.height = "100%";
  mainScene.style.display = "block";
}, 5000);
