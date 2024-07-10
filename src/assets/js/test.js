export const test = () => {
    console.log('from test');
};

let none = document.getElementById("none");
let remove = document.getElementById("remove");

remove.onclick = function () {
    none.style.display = "none";
};

document.getElementById('popover-btn').addEventListener('click', function() {
    var popover = document.getElementById('popover-content');
    popover.classList.toggle('show');
  });
  
  // Close the popover if user clicks outside of it
  window.addEventListener('click', function(event) {
    var popover = document.getElementById('popover-content');
    var popoverBtn = document.getElementById('popover-btn');
    if (event.target !== popover && event.target !== popoverBtn) {
      popover.classList.remove('show');
    }
  });