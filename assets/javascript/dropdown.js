document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".nav-item.dropdown");
  const dropdownMenu = dropdown.querySelector(".dropdown-menu");

  let timeout; // Variable to hold the timeout ID for hiding the dropdown

  // Show dropdown on mouse enter
  dropdown.addEventListener("mouseenter", function () {
    clearTimeout(timeout);
    dropdownMenu.style.display = "block"; // Show the dropdown
  });

  // Hide dropdown on mouse leave
  dropdown.addEventListener("mouseleave", function () {
    timeout = setTimeout(function () {
      dropdownMenu.style.display = "none"; // Hide after delay
    }, 300); // Delay in milliseconds
  });

  // Prevent hiding dropdown when hovering over the dropdown menu
  dropdownMenu.addEventListener("mouseenter", function () {
    clearTimeout(timeout);
    dropdownMenu.style.display = "block"; // Keep dropdown visible
  });

  // Hide dropdown when mouse leaves the dropdown menu
  dropdownMenu.addEventListener("mouseleave", function () {
    timeout = setTimeout(function () {
      dropdownMenu.style.display = "none"; // Hide after delay
    }, 300);
  });
});
