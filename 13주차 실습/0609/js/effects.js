$(document).ready(function() {
    // $('#show-btn').on('click', function() {
    //     $('#gwnu-logo').show('slow');
    //     });
    $('#show-btn').on('click', function() {
    $('#gwnu-logo').slideDown('slow');
    });
    
    // $('#hide-btn').on('click', function() {
    //     $('#gwnu-logo').hide('slow');
    // });
    $('#hide-btn').on('click', function() {
        $('#gwnu-logo').slideUp('slow');
    });

    // $('#toggle-btn').on('click', function() {
    //     $('#gwnu-logo').toggle('slow');
    // });
    $('#toggle-btn').on('click', function() {
        $('#gwnu-logo').slideToggle('slow');
    });

    // $('#show-num-btn').on('click', function() {
    //     $('#num').show(1000);
    // });
    $('#show-num-btn').on('click', function() {
        $('#num').fadeIn(1000);
    });
    // $('#hide-num-btn').on('click', function() {
    //     $('#num').hide(5000);
    // });
    $('#hide-num-btn').on('click', function() {
        $('#num').fadeOut(5000);
    });
    // $('#toggle-num-btn').on('click', function() {
    //     $('#num').toggle(2000);
    // })
    $('#toggle-num-btn').on('click', function() {
        $('#num').fadeToggle(2000);
    });
});