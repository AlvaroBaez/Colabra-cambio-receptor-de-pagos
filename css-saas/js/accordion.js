$('.cpl_accordion .accordion_item').click(function(){

   if($(this).hasClass('active')){
      $(this).children('.accordion_content').removeClass('animated fadeInDown');
      $(this).removeClass('active');
         
   }else{
        $(this).children('.accordion_content').addClass('animated fadeInDown');
       $(this).addClass('active');
       
   }
   

});
