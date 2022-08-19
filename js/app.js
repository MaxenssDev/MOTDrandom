jQuery(function ($) {

    var hash = window.location.hash;
    $('.tabs').each(function () {
        if(hash && $(this).find('a[href="' + hash + '"]').length > 0){
            current = hash;
        }else{
            var current = $(this).find('a:first').attr('href');
        }
        $(current).fadeIn();

        $(this).find('a').click(function () {
            var link = $(this).attr('href');
            if(link === current){
                return false;
            }else{
                $(link).fadeIn();
                $(current).hide();
                current = link;
            }

        });
    })
    
});