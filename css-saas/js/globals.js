$(document).ready(function(){

    // boton con carga
    $('.cpl_btn.load').click(function(){
      $(this).addClass('loading');

      $(this).attr("disabled", true);

      $(this).find('span').html('<div class="lds-ring"><div></div><div></div><div></div><div></div></div>');
    });

    // Error de formularios enlazado a input
$('.cpl_flex_form .input_wrap .f_error').click(function(){
        $(this).parents('.input_wrap').children('input').focus();
    });
    


// $('.cpl_flex_form .select_wrap').click(function() { 
//     var dropdown = $(this).children('input');
//     showDropdown(dropdown); 
// });


// Tablas responsivas__________________________________

$('.responsive_table td').prepend('<div class="th_movil"></div>');
// $('.cpl_realTable thead').prepend('<h2>Tus solicitudes</h2>');

$(".clickable-row").click(function() {
  window.location = $(this).data("href");
});


var table = document.getElementsByClassName('cpl_realTable'); 
var tableRes = document.getElementsByClassName('cpl_realTable responsive_table'); 
var tableResS = document.getElementsByClassName('cpl_realTable responsive_table_s');


for(i=0;i<tableRes.length;i++){


th = tableRes[i].getElementsByTagName('th');  
tr = tableRes[i].getElementsByTagName('tr');



for(o=0;o<tr.length;o++){

   thMovil = tr[o].getElementsByClassName('th_movil');

     

  for(t=0;t<thMovil.length;t++){
    
     thMovil[t].innerHTML =  th[t].innerHTML;
  

  }



}




}

// $('.cpl_realTable.selectable_row.one tbody tr').click(function(){
//   var table = $(this).parents('table'); 

// $(this).find('input').prop('checked', true);


// table.find('tr').removeClass('selected_row');
// $(this).addClass('selected_row');


// });

// selector tabla multiple
var selector = $('.cpl_realTable.selectable_row.multiple tbody tr.selectable td.check input');
selector.filter('input:checked').parents('tr').addClass('selected_row');



selector.click(function(){
  var tr = $(this).parents('tr'); 

  if(tr.hasClass('selected_row')){
    
  
    tr.removeClass('selected_row');

  }else{

 

tr.addClass('selected_row');
}

});


$('.cpl_realTable.selectable_row.multiple tbody tr.selectable td:not(.check)').on('click', function(e) {
  if (e.target == 'input')
    return;  



  var tr = $(this).parents('tr');

  if(tr.hasClass('selected_row')){
    return;
  }else{

tr.find('input').prop('checked', true);
// tr.find('input[type="number"]').focus();



tr.addClass('selected_row');
}


});







// $('.cpl_realTable.selectable_row td.check input').change(function(){
//     var table = $(this).parents('table'); 
//     table.find('tr').removeClass('selected_row');
//   if($(this).is(':checked')){
    
//     $(this).parents('tr').addClass('selected_row');
//   }
// });





});


// Funciones+____________________________________________________________________________________-

// showDropdown = function (element) {
//   var event;
//   event = document.createEvent('MouseEvents');
//   event.initMouseEvent('mousedown', true, true, window);
//   element.dispatchEvent(event);
// };


// minimo y maximo en input de porcentajes

$(function () {
  $(".percentage_wrap.number_wrap input").keydown(function () {
    // Save old value.
    if (!$(this).val() || (parseInt($(this).val()) <= 100 && parseInt($(this).val()) >= 1))
    $(this).data("old", $(this).val());
  });
  $(".percentage_wrap.number_wrap input").keyup(function () {
    // Check correct, else revert back to old value.
    if (!$(this).val() || (parseInt($(this).val()) <= 100 && parseInt($(this).val()) >= 1))
      ;
    else
      $(this).val($(this).data("old"));
  });
});

// minimo y maximo en input de porcentajes


function showWithRadio(e, n){

  $(e).change(function(){
    var clase = $(e).val();
    $('.'+n).hide();
    $('.'+clase).show(200);
  });
}


function tooltipBox(e){

   
  var box = $(e).children('.box');
  if(!$(e).hasClass('active')){

     $(e).addClass('active'); 
  $(box).show(500);
  // $(box).addClass('animated slideInDown');
  
}
else{
  
  $(box).hide(200);
  // $(box).removeClass('animated slideInDown');
  $(e).removeClass('active');
}

$(document).on("click",function(a) {
                   
  var container = $(e);
                     
     if (!container.is(a.target) && container.has(a.target).length === 0) { 
        $(box).hide(200);
        // $(box).removeClass('animated slideInDown');
        $(e).removeClass('active');              
     }
});
  

  


      

}




