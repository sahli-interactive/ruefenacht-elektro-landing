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
