document.addEventListener("DOMContentLoaded", function() {
  var dropdownButton = document.querySelector('.dropbtn');
  var dropdownContent = document.getElementById('myDropdown');

  dropdownButton.addEventListener('click', function(event) {
      // Check if the click happened on the image
      if (event.target.classList.contains('dropdownIcon')) {
          // Toggle the visibility of the dropdown content
          dropdownContent.classList.toggle('show');
      }
  });

  // Close the dropdown menu if the user clicks outside of it
  window.addEventListener('click', function(event) {
      if (!event.target.matches('.dropbtn') && !event.target.matches('.dropdownIcon')) {
          if (dropdownContent.classList.contains('show')) {
              dropdownContent.classList.remove('show');
          }
      }
  });
});


