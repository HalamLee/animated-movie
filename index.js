const chosenImage = Math.floor(Math.random() * 20) + 1;
const image_url = `img/${chosenImage}.jpg`;

document.body.style.cssText += `background-image:url(${image_url})`;
