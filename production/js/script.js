// JavaScript code to handle section switching
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the sections and navigation buttons
  const competencesSection = document.getElementById("competences");
  const profilSection = document.getElementById("profil");
  const entreprisesSection = document.getElementById("entreprises");

  const competencesButton = document.getElementById("competences-button");
  const profilButton = document.getElementById("profil-button");
  const entreprisesButton = document.getElementById("entreprises-button");

  // Function to hide all sections
  function hideAllSections() {
    competencesSection.style.display = "none";
    profilSection.style.display = "none";
    entreprisesSection.style.display = "none";
  }

  // Function to show a specific section
  function showSection(section) {
    hideAllSections();
    section.style.display = "block";
  }

  // Initially, display the "Profil" section
  showSection(profilSection);

  // Add click event listeners to navigation buttons
  competencesButton.addEventListener("click", function () {
    showSection(competencesSection);
  });

  profilButton.addEventListener("click", function () {
    showSection(profilSection);
  });

  entreprisesButton.addEventListener("click", function () {
    showSection(entreprisesSection);
  });
});


const buttons = document.querySelectorAll('.nav-button');

function moveTrianglesToActiveButton(activeButton) {
  // First, ensure all triangles are removed from all buttons
  document.querySelectorAll('.triangle-before, .triangle-after').forEach(triangle => {
    triangle.remove();
  });

  // Create new triangle elements (assuming you have the same source for these images)
  let newTriangleBefore = document.createElement('img');
  newTriangleBefore.src = 'img/menu__triangle_left.png';
  newTriangleBefore.className = 'triangle-image triangle-before';

  let newTriangleAfter = document.createElement('img');
  newTriangleAfter.src = 'img/menu__triangle.png';
  newTriangleAfter.className = 'triangle-image triangle-after';

  // Identify the image and text elements within the active button
  const imgElement = activeButton.querySelector('img:not(.triangle-image)');
  const textElement = activeButton.querySelector('.buttontext');

  // Reconstruct the button content
  activeButton.innerHTML = '';
  activeButton.appendChild(newTriangleBefore);
  if (imgElement) activeButton.appendChild(imgElement);
  activeButton.appendChild(newTriangleAfter);
  if (textElement) activeButton.appendChild(textElement);
}
//Function Globale 
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Remove the 'active' class from all buttons
    buttons.forEach((btn) => {
      btn.classList.remove('active');
    });

    // Add the 'active' class to the clicked button
    button.classList.add('active');

    // Move the triangle images to the active button
    moveTrianglesToActiveButton(button);
  });
});

//Function PopUp Decouvrir

const buttonDecouvrir = document.getElementById("btndecouvrir");
const PopUptext = document.getElementById("profil_popup");
const closeButton = document.getElementById("image_close_popup");
const imageprofile = document.getElementById("profil__banner-pp");
const mobileWindow = document.querySelector(".mobile__window");

// Function to show the popup
function showPopup() {
  PopUptext.style.display = "block";
  mobileWindow.classList.add("darken"); // Add a class to darken the mobile__window
}

// Function to close the popup
function closePopup() {
  PopUptext.style.display = "none";
  mobileWindow.classList.remove("darken"); // Remove the class to remove the dark overlay
}

imageprofile.addEventListener('click', (e) => {
  showPopup();
  e.stopPropagation(); // Prevent the click event from propagating to the document
});

buttonDecouvrir.addEventListener('click', (e) => {
  showPopup();
  e.stopPropagation(); // Prevent the click event from propagating to the document
});

closeButton.addEventListener('click', (e) => {
  closePopup();
  e.stopPropagation(); // Prevent the click event from propagating to the document
});

document.addEventListener('click', (e) => {
  if (e.target !== PopUptext && !PopUptext.contains(e.target)) {
    closePopup();
  }
});

// https://platform.openai.com/docs/overview

// Get the Gmail link element by its ID
const gmailLink = document.getElementById('gmail-link');

// Function to check if the user is on a mobile device
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Add a click event listener to the Gmail link
gmailLink.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default behavior of the link

    // Define email parameters
    const to = 'vinc.charles0@gmail.com'; // Update this to the recipient's email address
    const subject = 'Subject here';
    const body = 'Body of the email here';

    if (isMobile()) {
        // If the user is on a mobile device, open the Gmail app if installed, or a web-based Gmail version
        const gmailAppUrl = `intent://send?to=${encodeURIComponent(to)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}#Intent;scheme=mailto;package=com.google.android.gm;end`;

        // Redirect to the Gmail app or web-based Gmail
        window.location.href = gmailAppUrl;
    } else {
        // If the user is not on a mobile device, open Gmail in a new window or tab
        const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open Gmail in a new window or tab
        window.open(gmailWebUrl, '_blank');
    }
});

// Calculate the percentage completion
const currentValue = 126;
const maxValue = 365;
const percentage = (currentValue / maxValue) * 100;

// Calculate the width based on the maximum width of 100px
const maxWidth = 100; // Maximum width in pixels
const calculatedWidth = (percentage / 100) * maxWidth;

// Set the width of the progress bar
document.getElementById('progress_bar').style.width = calculatedWidth + 'px';



// Get a reference to the add button element
var addButton = document.getElementById("addcoins");

// Add a click event listener to the add button
addButton.addEventListener("click", function() {
    // Get the current number inside the <p> element
    var coinsElement = document.getElementById("Coins");
    var currentNumber = parseInt(coinsElement.textContent);

    // Increment the number by 1
    var newNumber = currentNumber + 1;

    // Update the display with the new number
    coinsElement.textContent = newNumber;
});

// Get a reference to the add button element
var addButton2 = document.getElementById("addcoins2");

// Add a click event listener to the add button
addButton2.addEventListener("click", function() {
    // Get the current number inside the <p> element
    var coinsElement2 = document.getElementById("Coins2");
    var currentNumber2 = parseInt(coinsElement2.textContent);

    // Increment the number by 1
    var newNumber2 = currentNumber2 + 1;

    // Update the display with the new number
    coinsElement2.textContent = newNumber2;
});
