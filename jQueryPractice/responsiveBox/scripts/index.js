/**
 * Created by BA.Ayers on 3/31/2015.
 */


$( document).ready(function() {
    var element = $('.gameBox')
    element.on('click', function() {
        if ($(this).hasClass('active')) {
            $(element).removeClass('active');
        }
        else {
            $(element).removeClass('active');
            $(this).addClass('active');
        }
    })
})
