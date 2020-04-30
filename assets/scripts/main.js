// Vendors
import './vendor/jquery'
import '@popperjs/core'
import './vendor/bootstrap'
import './vendor/fontawesome'

$('form :input').focus(function () {
  $('label[for="' + this.id + '"]').addClass('labelfocus');
}).blur(function () {
  $('label[for="' + this.id + '"]').removeClass('labelfocus');
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$("#js-notification").submit(function(e) {
  e.preventDefault();

  let $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
    $("#js-notification").fadeOut(() => {
      $('#js-notification-success').fadeIn()
    });
  });
});
