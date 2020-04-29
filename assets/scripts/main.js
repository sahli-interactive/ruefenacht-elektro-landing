// Vendors
import './vendor/jquery'
import './vendor/bootstrap'
import './vendor/fontawesome'

$('form :input').focus(function() {
    $('label[for="' + this.id + '"]').addClass('labelfocus');
}).blur(function() {
    $('label[for="' + this.id + '"]').removeClass('labelfocus');
});
