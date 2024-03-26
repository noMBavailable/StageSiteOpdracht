//make multi const images for the different projects

const images = ['images/FTCMenu.PNG', 'images/stockphoto12.jpg', 'images/notebook-rotated.png', 'images/mathias-reding-P0YeIVOyvSI-unsplash.jpg'];
let currentIndex = 0;

function prevImage() {
  if (currentIndex === 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex--;
  }
  document.getElementById('bannerImage').src = images[currentIndex];
}

function nextImage() {
  if (currentIndex === images.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  document.getElementById('bannerImage').src = images[currentIndex];
}
