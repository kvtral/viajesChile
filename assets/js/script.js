$(document).ready(function () {

   $(window).scroll(function() {
    if ($('#navBar').offset().top > 250) {
        $('#navBar').addClass('bg-dark');
    }  else {
        $('#navBar').removeClass('bg-dark');
    } 
}); 

  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  

});

