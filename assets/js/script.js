$(document).ready(function () {
  var toggle = $("#toggle");
  var navbar = $("#navbar");

  toggle.click(function () {    
    $(this).toggleClass('on');
    navbar.toggleClass("active");    
  })
});
