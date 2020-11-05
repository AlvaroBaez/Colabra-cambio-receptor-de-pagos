//crear banner depósito directo 


    $('.nueva_clave').focusout(function(){
      if($(this).val().length < 6){
          $(this).parents('.input_wrap').children('.f_error').html('La clave debe ser de 6 dígitos');
          
          $(this).parents('.input_wrap').children('.f_error').show();


      }
      if($('.repite_clave').val() != $('.nueva_clave').val()){
        $('.repite_clave').parents('.input_wrap').children('.f_error').html('Las claves no coinciden');
          
        $('.repite_clave').parents('.input_wrap').children('.f_error').show();
      }
      else{
       

        $(this).parents('.input_wrap').children('.f_error').hide();

      }



      
    });

    $('.repite_clave').keyup(function(){
        if($('.repite_clave').val() != $('.nueva_clave').val()){
            $('.repite_clave').parents('.input_wrap').children('.f_error').html('Las claves no coinciden');
              
            $('.repite_clave').parents('.input_wrap').children('.f_error').show();
          }
        else{
          $(this).parents('.input_wrap').children('.f_error').hide();
        }
  
  
  
        
      });


    


  

