var checkbox = document.getElementById('myCheckbox');

// Check if the checkbox element exists
if (checkbox) {
  // Add an event listener to the checkbox to save its state when it changes
  checkbox.addEventListener('change', function() {
    // Save the checkbox state in localStorage
    localStorage.setItem('checkboxState', checkbox.checked);
  });

  // On page load, retrieve the saved checkbox state from localStorage
  var savedCheckboxState = localStorage.getItem('checkboxState');

  // If a value is found in localStorage, set the checkbox state accordingly
  if (savedCheckboxState !== null) {
    checkbox.checked = JSON.parse(savedCheckboxState);
  }
}

let lastScrollTop = 0;
var miHeader = document.getElementById('cabecera');

window.addEventListener("scroll", function(event) {
    let currentScrollTop = window.scrollY;

    if (currentScrollTop > lastScrollTop) {
      console.log("Scrolling down");
      miHeader.style.top='-6rem';
    } else {
      console.log("Scrolling up");
      miHeader.style.top='0';
    }
    lastScrollTop = currentScrollTop;
});

window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 100);
});