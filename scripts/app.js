$(document).ready(function (){
    openTabList('#top-novel')
    $('.container-item__novel').each(function(){
        $(this).find('.novel-thumbnail').css('background-image', 'url('+$(this).data('bg')+')')
    })

    $(".novel-top-list .tab-button").click(function() {
        var id = $(this).data('idswitchto');
        $('.novel-top-list .tab-button').each(function() {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            }
        })
        $(this).addClass('active')
        openTabList(id);
    })

    $('.navbar-switch').click(function () {
        if ($('.navbar-top').hasClass('active')) {
            $('.navbar-top').removeClass('active');
        } else {
            $('.navbar-top').addClass('active');
        }
    })

    if ($('.description-content').height() > 100) {
        $('.description-content').css('max-height', '100px');
        $('.see-more').text('Xem thêm');
        $('.description-more').click(function() {
            if ($(this).hasClass('more-state')) {
                $('.description-content').css('max-height', 'none');
                $('.see-more').text('Ẩn đi')
                $(this).removeClass('more-state')
            } else {
                $('.description-content').css('max-height', '100px');
                $('.see-more').text('Xem thêm')
                $(this).addClass('more-state')
            }
        })
    } else {
        $('.description-more').addClass('none')
    }
})

function openTabList(id) {
    $(id).css('display', 'block')
    $('.novel-top-list .tab-content .catalog').each(function() {
        if('#'+$(this).attr('id') != id) {
            $(this).css('display', 'none')
        }
    })
}