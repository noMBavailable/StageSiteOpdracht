


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



var texts = [
  "For The Cause\n2d Platformer\n3 Levels\nMade By: Marc Baudet", // /n can be used to break lines or new line
  "Just Bowling\nAnother line\nAnd another line\nMade By: Marc Baudet",
  "Website\nAdditional information\n additional\nMade By: Marc Baudet",
  "tbd\nAdditional information\n additional\nMade By: Marc Baudet"
]; // Array containing different texts

function changeText(currentText) {
  var textIndex = currentText;
  var textElement = document.getElementById("layer_text");
  var text = texts[textIndex];
  
  // Split the text into multiple lines
  var lines = text.split('\n');
  
  // Create HTML content with padding between lines
  var htmlContent = '';
  lines.forEach((line, index) => {
    if (index === 0) {
      // First line (title) with larger font size and padding
      htmlContent += `<div class="titlefont" style="padding-bottom: 15px">${line}</div>`;
    } else {
      // Other lines with regular font size and padding
      htmlContent += `<div class="parafont" style="padding-top: 20px">${line}</div>`;
    }
  });
  
  // Set HTML content to the text element
  textElement.innerHTML = htmlContent;
}



/*function changeText(currentText) {
  var textIndex = currentText;
  var textElement = document.getElementById("layer_text");
  
  textElement.textContent = texts[textIndex]; // Set new text
}
*/