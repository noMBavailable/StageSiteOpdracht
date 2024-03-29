


const imageArray = [
['images/FTCMenu.PNG', 'images/Capture.PNG', 'images/Capasdasdasdture.PNG', 'images/Capturasdse.PNG'],
['images/stockphoto12.jpg', 'images/notebook-rotated.png', 'images/stockphoto12.jpg', 'images/notebook-rotated.png'],
['images/notebook-rotated.png', 'images/pawel-czerwinski-8uZPynIu-rQ-unsplash.jpg', 'images/notebook-rotated.png', 'images/pawel-czerwinski-8uZPynIu-rQ-unsplash.jpg'],
['images/pawel-czerwinski-8uZPynIu-rQ-unsplash.jpg', 'images/FTCMenu.PNG', 'images/pawel-czerwinski-8uZPynIu-rQ-unsplash.jpg', 'images/FTCMenu.PNG']
];



function changeProject(projectIndex) {
    currentProjectIndex = projectIndex;
    currentImgIndex = 0;
    document.getElementById('bannerImage').src = imageArray[currentProjectIndex][currentImgIndex];
    
    // Remove glow class from all notebook buttons
    const notebookButtons = document.querySelectorAll('.notebooksbutton');
    notebookButtons.forEach(button => button.classList.remove('glow'));
    
    // Add glow class to the clicked notebook button
    const clickedButton = document.getElementById('layer' + (currentProjectIndex + 4));
    clickedButton.classList.add('glow');

    changeText(projectIndex)
}

/*function changeProject(projectIndex) {
  currentProjectIndex = projectIndex;
  currentImgIndex = 0;
  document.getElementById('bannerImage').src = imageArray[currentProjectIndex][currentImgIndex];
 
 
 }
*/



function changeImage(fileName) {
  let img = document.querySelector("#bannerImage");
  img.setAttribute("src", fileName);
}


function prevImage() {
  if (currentImgIndex === 0) {
    currentImgIndex = imageArray[currentProjectIndex].length - 1;
  } else {
    currentImgIndex--;
  }
  document.getElementById('bannerImage').src = imageArray[currentProjectIndex][currentImgIndex];
}

function nextImage() {
  if (currentImgIndex === imageArray[currentProjectIndex].length - 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex++;
  }
  document.getElementById('bannerImage').src = imageArray[currentProjectIndex][currentImgIndex];
}



var texts = ["For The Cause ", "Text 2", "Text 3","Text 4"]; // Array containing different texts


function changeText(currentText) {
  var textIndex = currentText;
  var textElement = document.getElementById("layer_text");
  textIndex = textIndex % texts.length; // Increment index and loop back to 0 when it reaches the end
  textElement.textContent = texts[textIndex]; // Set new text
}
