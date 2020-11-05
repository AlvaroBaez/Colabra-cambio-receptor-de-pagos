
 function show_hidden(a, shcc, hcc ) {

        
    
     targets(a, shcc, hcc);
    
    
   
    
}
      

    
          
    

    

        function targets(e, show, hide) {

          
            $(e).removeClass('animated zoomIn');
            $(hide).hide(0);
            $(show).css('display', 'block');
            $(show).addClass('animated slideInUp');

            $('.form_cancel').click(function () {
                $(show).removeClass('animated slideInUp');
                $(show).hide(0);
                $(hide).css('display', 'block');
               
                $(e).addClass('animated zoomIn');
            });
 };

        // $('.cancel_add_acount').click(function () {

        //     $('.account_form, .account_summary').removeClass('animated slideInUp');
        //     $('.account_form, .account_summary').hide(0);
        //     $('.adding_acount_hide').css('display', 'block');
            
        //     $('.agregar_cuenta_btn').addClass('animated zoomIn');
        // });

        


        // $('.editar_datos').click(function () {
        //     $('.account_summary').removeClass('animated slideInUp');
        //     $('.account_summary').hide(0);
        //     $('.account_form').css('display', 'block');
           
        //     $('.account_form').addClass('animated zoomIn');
        // });


        $('.tipo_cuenta_select').change(function(){
          

           if($(this).val() == 'ctaRut'){

               $('.cuenta_rut_alert').css('display', 'block').addClass('animated fadeInUp');
           }else{
            $('.cuenta_rut_alert').css('display', 'none').removeClass('animated fadeInUp');
           }

        });


        $(document).ready(function(){

            if($('.tipo_cuenta_select').val() == 'ctaRut'){
 
                $('.cuenta_rut_alert').css('display', 'block').addClass('animated fadeInUp');
            }else{
             $('.cuenta_rut_alert').css('display', 'none').removeClass('animated fadeInUp');
            }



            $('.listado_cuentas .cpl_realTable tbody tr').click(function(){
                $('html, body').animate(
                    {
                      scrollTop: $('.mail_de_confirmacion').offset().top,
                    },
                    500,
                    'linear'
                  );
                $('.mail_de_confirmacion').focus();
            });
 
         });
 
         
         
 


        // function showForm (){
        //         $('.account_form').css('display', 'block')
        //     $('.account_form .flex_row').addClass('animated flipInY');

        //     };

