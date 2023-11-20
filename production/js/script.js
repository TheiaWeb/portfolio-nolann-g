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


function moveTrianglesToActiveButton(activeButton) {
  // First, ensure all triangles are removed from all buttons
  document.querySelectorAll('.triangle-before, .triangle-after').forEach(triangle => {
    triangle.remove();
  });

  // Create new triangle elements (assuming you have the same source for these images)
  let newTriangleBefore = document.createElement('img');
  newTriangleBefore.src = 'img/menu__triangle.png';
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


