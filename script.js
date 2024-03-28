//make multi const images for the different projects

let currentIndexImg = 0;

function prevImage() {
  if (currentIndexImg === 0) {
    currentIndexImg = imageArray.length - 1;
  } else {
    currentIndexImg--;
  }
  document.getElementById('bannerImage').src = imageArray[currentIndexImg];
}

function nextImage() {
  if (currentIndexImg === imageArray.length - 1) {
    currentIndexImg = 0;
  } else {
    currentIndexImg++;
  }
  document.getElementById('bannerImage').src = imageArray[currentIndexImg];
}

const currentImgIndex = [];
const imageArray = [currentImgIndex[currentIndexImg]];

imageArray[0] = 'images/FTCMenu.PNG', 'images/stockphoto12.jpg', 'images/FTCMenu.PNG', 'images/stockphoto12.jpg';
imageArray[1] = 'images/stockphoto12.jpg', 'images/notebook-rotated.png', 'images/stockphoto12.jpg', 'images/notebook-rotated.png';
imageArray[2] = 'images/notebook-rotated.png', 'images/mathias-reding-P0YeIVOyvSI-unsplash.jpg', 'images/notebook-rotated.png', 'images/mathias-reding-P0YeIVOyvSI-unsplash.jpg';
imageArray[3] = 'images/mathias-reding-P0YeIVOyvSI-unsplash.jpg', 'images/FTCMenu.PNG', 'images/mathias-reding-P0YeIVOyvSI-unsplash.jpg', 'images/FTCMenu.PNG';

let currentProjectIndex = 0;
function changeProject(currentProjectIndex) {
 imageArray[currentProjectIndex];
document.getElementById('bannerImage').src = imageArray[currentIndexImg];
console.log("currentProjectIndex: " + currentProjectIndex); 
console.log("currentImageIndex: " + imageArray[currentProjectIndex]); 

  
}

function changeImage(fileName) {
  let img = document.querySelector("#bannerImage");
  img.setAttribute("src", fileName);
}
