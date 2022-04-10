$(document).ready(function () {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  

$(window).scroll(function() {
  if (("#navBar").offset().top > 50) {
  $("#navBar").toggleClass("bg-dark");
  }
});

});

