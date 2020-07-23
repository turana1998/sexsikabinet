$(document).on('ready', function () {

  $('.field').on('focus', function () {
    $('body').addClass('is-focus');
  });

  $('.field').on('blur', function () {
    $('body').removeClass('is-focus is-type');
  });

  $('.field').on('keydown', function (event) {
    $('body').addClass('is-type');
    if ((event.which === 8) && $(this).val() === '') {
      $('body').removeClass('is-type');
    }
  });

});
let navStatus=false;
$( "#mobile-toggle" ).click(function() {
  if(navStatus){
  $( ".mobile-navbar" ).animate({
    left: "-204px",
  }, 1500 );
  navStatus=false;
  $("#nav-button").removeClass();
   $("#nav-button").addClass("fas fa-bars ml-1")
}
else
{
 $( ".mobile-navbar" ).animate({
    left: "0px",
  }, 1500 );
  navStatus=true;
   $("#nav-button").removeClass();
   $("#nav-button").addClass("fa fa-times ml-1")
   $( ".private-account-nav" ).animate({
    right: "-240px",
    display:"none"
  }, 1500 );

  rightnavStatus=false;
   setTimeout(function() { 
       $( ".private-account-nav" ).hide();
    }, 1400);
}
});
let rightnavStatus=false;
$( "#right-nav" ).click(function() {
  if(rightnavStatus){
  $( ".private-account-nav" ).animate({
    right: "-240px",
    display:"none"
  }, 1500 );

  rightnavStatus=false;
   setTimeout(function() { 
       $( ".private-account-nav" ).hide();
    }, 1400);
}
else
{
   $( ".private-account-nav" ).show();
 $( ".private-account-nav" ).animate({
    right: "0px",
    display:"block"
  }, 1500 );
   rightnavStatus=true;
  
   $( ".mobile-navbar" ).animate({
    left: "-204px",
  }, 1500 );
  navStatus=false;
    $("#nav-button").removeClass();
   $("#nav-button").addClass("fas fa-bars ml-1")
}
});
