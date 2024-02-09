// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    $('#calculateBtn').click(function () {
        var hours = parseFloat($('#hours').val());

        // Check if the input is a positive number
        if (isNaN(hours) || hours < 0) {
            alert('Please enter a positive number for the hours.');
            return;
        }

        var rate = parseFloat($('#rate').val().replace('$', ''));
        var total = hours * rate;
        $('#total').val('$' + total.toFixed(2));
    });
});
