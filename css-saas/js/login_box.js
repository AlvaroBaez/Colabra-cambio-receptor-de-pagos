$(document).ready(function(){
    $('.cpl_login_box .tab').click(function(){
        if(!$(this).hasClass('active')){
            $('.cpl_login_box .tab').removeClass('active');
            $(this).addClass('active');
            if($(this).hasClass('empresas')){
                $('.cpl_login_box .persona').hide();
                $('.cpl_login_box .persona').removeClass('zoomIn');
                $('.cpl_login_box .empresa').show();
                $('.cpl_login_box .empresa').addClass('zoomIn');
            }
            if($(this).hasClass('personas')){
                $('.cpl_login_box .empresa').hide();
                $('.cpl_login_box .empresa').removeClass('zoomIn');
                $('.cpl_login_box .persona').show();
                $('.cpl_login_box .persona').addClass('zoomIn');
            }
        }
    });
});