$(document).ready(function() {
//AGREGA CLASES enumeradas a la Tabla de saldos.
   var numItems = $('.tabla_cuentas > .tr-cuentas').length;
   $('.wp_cuentas_y_saldos').addClass('countCpl' + numItems);
   
//Muestra y Esconde a la tabla de saldo el version MOBILE
   $(".hiddeShowBtn").click(function(){
       $(".hiddeShowBtn").toggle();
       $(".mas_cuentas .CPL_mobileShowTable").slideToggle();
    });

//cambias titulo de saldos
/*$('.cplTitleShort').hide();
if ($('.cplTitleLong').height() >= 20) {
  $('.cplTitleLong').hide();
  $('.cplTitleShort').show();

 }

*/
let doit; 
window.addEventListener('resize',(e) => {

   clearTimeout(doit);
   doit = setTimeout(checkSizeName,250)
});



function checkSizeName()
{

   let listaElementos =  document.getElementsByClassName('cplTitleLong')
   for(i = 0;  i < listaElementos.length;i++)
   {
     let tempElement = '--';

     let tempArrayId =  listaElementos[i].id.split("_")


     let longTextId = listaElementos[i].id;
     let shortTextId = tempArrayId[0]+'_ts';
      
     console.log(longTextId);
     console.log(shortTextId);

     let longTextComponent =  document.getElementById(longTextId);
     let shortTextComponent =  document.getElementById(shortTextId);

     heightText =  longTextComponent.offsetHeight;

      console.log(heightText);
     if(heightText>=20)
     {
     
        document.getElementById(longTextId).style.visibility = 'hidden';
       document.getElementById(shortTextId).style.visibility = 'visible';
     }else
     {
         
        document.getElementById(longTextId).style.visibility = 'visible';
       document.getElementById(shortTextId).style.visibility = 'hidden';
     }


   }
}

 
});