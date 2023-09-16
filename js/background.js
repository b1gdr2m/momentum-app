const images = ["0.jpeg","1.jpeg"];

const chosenImages = images[Math.floor(Math.random() * images.length)];

const bgImage = `url(img/${chosenImages})`
//필요한 tag 들을 넣으면 됨

document.body.style.backgroundImage = bgImage;

