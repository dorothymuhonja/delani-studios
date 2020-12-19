$(document).ready(function () {
$('.change-1').click(function(){
  $('.change-1').slideDown('1500').hide('1000');
  $('#hide-1').show('1500');
});
$('#hide-1').click(function(){
  $('#hide-1').slideUp('1500');
  $('.change-1').slideDown('1500');
});

});

$(document).ready(function () {
  $('.change-2').click(function () {
    $('.change-2').slideDown('1500').hide('1000');
    $('#hide-2').show('1500');
  });
  $('#hide-2').click(function () {
    $('#hide-2').slideUp('1500');
    $('.change-2').slideDown('1500');
  });
});



















$(document).ready(function () {
  $('.change-3').click(function () {
    $('.change-3').slideDown('1500').hide('1000');
    $('#hide-3').show('1500');
  });
  $('#hide-3').click(function () {
    $('#hide-3').slideUp('1500');
    $('.change-3').slideDown('1500');
  });
});


 $(document).ready(function () {
   $('form.formValidation').submit(function () {
      event.preventDefault();
     var name = $('input#name').val();
     var email = $('input#email').val();
     var message = $('textarea#message').val();
    
     if (name && email) {
       alert(name +` your message has been received. We'll get back to you soon.`);
     } else {
       alert('Please enter your details!');
     }
   });
 });
