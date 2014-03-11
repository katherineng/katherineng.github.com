$(document).ready(function() {
    var $w = $(window);

    function setSize() {
        var width = $w.width();
        var height = $w.height();

        if (width > 530  && width < 1280) {
            $('.background').width(width - 200);
        } else if (width <= 530) {
            $('.background').width(330);
        } else {
            $('.background').width(1080);
        }

        if (height > 500 && height < 780) {
            $('.background').height(height - 250);
            $('.content').height(height - 350);
        } else if (height <= 500) {
            $('.background').height(250);
            $('.content').height(150);
        } else {
            $('.background').height(530);
            $('.content').height(430);
        }
    }

    setSize();

    $w.resize(setSize);
});
