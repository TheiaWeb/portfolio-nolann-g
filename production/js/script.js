
//#region Compétences
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the sections and navigation buttons
  const MediaSection = document.getElementById("tab_media");
  const AdobeSection = document.getElementById("tab_adobe");
  const PhotoSection = document.getElementById("tab_photo");
  const OutilSection = document.getElementById("tab_outils_media");

  const Tabs1 = document.getElementById("tabs1");
  const Tabs2 = document.getElementById("tabs2");
  const Tabs3 = document.getElementById("tabs3");
  const Tabs4 = document.getElementById("tabs4");

  // Function to hide all sections
  function hideAllSections() {
      MediaSection.style.display = "none";
      AdobeSection.style.display = "none";
      PhotoSection.style.display = "none";
      OutilSection.style.display = "none";
  }

  // Function to show a specific section
  function showSection(section) {
      hideAllSections();
      // Remove the 'competence__tab-active' class from all tabs
      Tabs1.classList.remove("competence__tab-active");
      Tabs2.classList.remove("competence__tab-active");
      Tabs3.classList.remove("competence__tab-active");
      Tabs4.classList.remove("competence__tab-active");

      section.style.display = "block";
      // Add the 'competence__tab-active' class to the corresponding tab
      if (section === MediaSection) {
          Tabs1.classList.add("competence__tab-active");
      } else if (section === AdobeSection) {
          Tabs2.classList.add("competence__tab-active");
      } else if (section === PhotoSection) {
          Tabs3.classList.add("competence__tab-active");
      } else if (section === OutilSection) {
          Tabs4.classList.add("competence__tab-active");
      }
  }

  // Initially, hide all sections
  hideAllSections();

  // Add click event listeners to navigation buttons
  Tabs1.addEventListener("click", function () {
      showSection(MediaSection);
  });

  Tabs2.addEventListener("click", function () {
      showSection(AdobeSection);
  });

  Tabs3.addEventListener("click", function () {
      showSection(PhotoSection);
  });

  Tabs4.addEventListener("click", function () {
      showSection(OutilSection);
  });

  // Show the initial section (e.g., MediaSection)
  showSection(MediaSection);
});
//#endregion

//#region Profil
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
//#endregion

//#region Entreprises

// Function to handle the click event
function togglePopup(bateauId, popupId) {
  const bateau = document.getElementById(bateauId);
  const popup = document.getElementById(popupId);

  // Function to show the popup and darken the background
  function showPopup() {
    popup.style.display = "block";
    mobileWindow.classList.add("darken"); // Add a class to darken the mobile__window
  }

  // Function to close the popup and remove the dark overlay
  function closePopup() {
    popup.style.display = "none";
    mobileWindow.classList.remove("darken"); // Remove the class to remove the dark overlay
  }

  bateau.addEventListener('click', (e) => {
    showPopup();
    e.stopPropagation(); // Prevent the click event from propagating to the document
  });

  const closeBtn = document.getElementById(bateauId + "__Popup");
  closeBtn.addEventListener('click', (e) => {
    closePopup();
    e.stopPropagation(); // Prevent the click event from propagating to the document
  });

  // Close the popup when clicking outside of it
  document.addEventListener('click', (e) => {
    if (e.target !== popup && !popup.contains(e.target)) {
      closePopup();
    }
  });
}

// Call the function for each element
togglePopup("bateauOserv", "company__popup_oserv");
togglePopup("bateauTorc", "company__popup_torc");
togglePopup("bateauGreenSuits", "company__popup_grensuits");
togglePopup("bateauSNCF", "company__popup_sncf");
togglePopup("bateauWooka", "company__popup_wooka");
togglePopup("bateauDexxon", "company__popup_dexxon");
togglePopup("bateauWavy", "company__popup_wavy");
togglePopup("bateauViv", "company__popup_viv");



// Event listener to close the popup when clicking outside the popup



//#endregion
// https://platform.openai.com/docs/overview


//#region Ouverture Gmail 
// Function to check if the user is on a mobile device
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const gmailLink1 = document.getElementById('gmail-link-1');
    const gmailLink2 = document.getElementById('gmail-link-2');
    const gmailLink3 = document.getElementById('gmail-link-3');

    // Add click event listeners for each Gmail link
    gmailLink1.addEventListener('click', function (event) {
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
    gmailLink2.addEventListener('click', function (event) {
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
  gmailLink3.addEventListener('click', function (event) {
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
    
    //#endregion

//#region Nav Bottom
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
    document.getElementById("Coins3").value == document.getElementById("Coins").value;
    document.getElementById("Coins4").value == document.getElementById("Coins2").value;
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



//#endregion

//#region Incrementeur Coins + Gems
// Get a reference to the add button element
function updateDisplay(elementId) {
            var coinsElement = document.getElementById(elementId);
            var currentNumber = parseInt(coinsElement.textContent);
            var newNumber = currentNumber + 1;
            coinsElement.textContent = newNumber;
        }

        // Add click event listeners for the first set of buttons
        var addButton1 = document.getElementById("addcoins");
        var addButton3 = document.getElementById("addcoins3");

        addButton1.addEventListener("click", function() {
            updateDisplay("Coins1");
        });

        addButton3.addEventListener("click", function() {
            updateDisplay("Coins3");
        });

        // Add click event listeners for the second set of buttons
        var addButton2 = document.getElementById("addcoins2");
        var addButton4 = document.getElementById("addcoins4");

        addButton2.addEventListener("click", function() {
            updateDisplay("Coins2");
        });

        addButton4.addEventListener("click", function() {
            updateDisplay("Coins4");
        });

        
//#endregion

//#region Progress Bar
// Calculate the percentage completion
const currentValue = 126;
const maxValue = 365;
const percentage = (currentValue / maxValue) * 100;

// Calculate the width based on the maximum width of 100px
const maxWidth = 100; // Maximum width in pixels
const calculatedWidth = (percentage / 100) * maxWidth;

// Set the width of the progress bar
document.getElementById('progress_bar').style.width = calculatedWidth + 'px';
document.getElementById('progress_bar2').style.width = calculatedWidth + 'px';


//#endregion

