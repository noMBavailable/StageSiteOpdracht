//make multi const images for the different projects

const images = ['images/FTCMenu.PNG', 'images/stockphoto12.jpg', 'images/notebook-rotated.png', 'images/mathias-reding-P0YeIVOyvSI-unsplash.jpg'];
let currentIndexImg = 0;

function prevImage() {
  if (currentIndexImg === 0) {
    currentIndexImg = images.length - 1;
  } else {
    currentIndexImg--;
  }
  document.getElementById('bannerImage').src = images[currentIndexImg];
}

function nextImage() {
  if (currentIndexImg === images.length - 1) {
    currentIndexImg = 0;
  } else {
    currentIndexImg++;
  }
  document.getElementById('bannerImage').src = images[currentIndexImg];
}


const imageArray = [];

imageArray[0] = 'images/FTCMenu.PNG';
imageArray[1] = 'images/stockphoto12.jpg';
imageArray[2] = 'images/notebook-rotated.png';
imageArray[3] = 'images/mathias-reding-P0YeIVOyvSI-unsplash.jpg';

let currentProjectIndex = 0;
function changeProject(currentProjectIndex) {
 imageArray[currentProjectIndex];

console.log("currentProjectIndex: " + currentProjectIndex); 
console.log("currentImageIndex: " + imageArray[currentProjectIndex]); 

  
}

