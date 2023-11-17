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
