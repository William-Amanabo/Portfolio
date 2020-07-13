import $ from 'jquery'
$(function() {
    $('#projects').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});