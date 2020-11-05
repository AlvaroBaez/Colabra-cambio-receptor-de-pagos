//tenemos que guardar en un arreglo los valores de los checkbox seleccionados

var accesos = document.querySelectorAll('.acceso');
var numeroAccesos = 4; 
var numeroAccesosSeleccionados = document.querySelectorAll('input[type="checkbox"].acceso:checked');
var accesosBloqueados = document.querySelectorAll('input[type="checkbox"].acceso:not(:checked)');
var MaxAlert = document.querySelectorAll('.MaxError');
var errorMax = MaxAlert[0].querySelector('.error_max');
var errorMin = MaxAlert[0].querySelector('.error_min');
var stepsNumbers = document.querySelector('.steps-numbers');
var current = stepsNumbers.querySelector('.current');
var contador = current.querySelector('.number');


function guardarAccesos(){
    var accesosSeleccionados = [];

   if(numeroAccesosSeleccionados.length < 1){
        // console.log(numeroAccesosSeleccionados.length);
        // console.log(accesosBloqueados.length);
     
             
             
                
                MaxAlert[0].classList.remove("fadeOut");
                MaxAlert[0].classList.add("jello");
                MaxAlert[0].style.display = 'block';
                errorMax.style.display = 'none';
                errorMin.style.display = 'block';
                // alertSpan.innerHTML = "Minimo debes seleccionar un acceso";


               setTimeout(function() {
                    MaxAlert[0].classList.remove("jello");
                }, 950);
       
                return false;  
            }
        
          
           
        else{
        // for(i=0; i < numeroAccesosSeleccionados.length; i++ ){
        //     numeroAccesosSeleccionados[i].disabled = false;
        //            numeroAccesosSeleccionados[i].parentElement.classList.remove("disabledAct");
        //    }
   

   
    
   var i;
    for(i=0; i < accesos.length; i++ ){
      if(accesos[i].checked == true){

           accesosSeleccionados.push(accesos[i].value);

      }
    }
//    console.log(accesosSeleccionados);
return true;
$('#hdnValuesAccesos').val(accesosSeleccionados);

}
}

function desactivar(){

    for(a=0; a < accesosBloqueados.length; a++ ){
        if(numeroAccesosSeleccionados.length >= numeroAccesos){
            // alert('if'+numeroAccesosSeleccionados.length+':'+numeroAccesos);
    accesosBloqueados[a].disabled = true;
    accesosBloqueados[a].parentElement.classList.add("disabled");
    accesosBloqueados[a].parentElement.onclick = function (){
        if(this.classList.contains("disabled")){
        MaxAlert[0].classList.remove("fadeOut");
        MaxAlert[0].classList.add("jello");
        MaxAlert[0].style.display = 'block';
  
        // alertSpan.innerHTML = "Has alcanzado el máximo de 4 accesos";
        errorMin.style.display = 'none';
        errorMax.style.display = 'block';
       setTimeout(function() {
            MaxAlert[0].classList.remove("jello");
        }, 950);
    //remover fade Out 
   }
    }
    
    }
    else{

        // console.log(numeroAccesosSeleccionados.length);
        // console.log(accesosBloqueados.length);
      
        // alert('else'+numeroAccesosSeleccionados.length+':'+numeroAccesos+':'+accesosBloqueados.length);
       accesosBloqueados[a].disabled = false;
        accesosBloqueados[a].parentElement.classList.remove("disabled");
       
        MaxAlert[0].classList.add("fadeOut");
    
  }
}

};


document.addEventListener("DOMContentLoaded", function(event) { 
 
// alert(numeroAccesosSeleccionados.length);
contador.innerHTML = numeroAccesosSeleccionados.length;
desactivar();



//tenemos que impedir que pueda seleccionar mas de 4 elementos y alertarlo cuando intente agregar un quinto
for(i=0; i < accesos.length; i++ ){

accesos[i].onclick = function(){


     numeroAccesosSeleccionados = document.querySelectorAll('input[type="checkbox"].acceso:checked');
     accesosBloqueados = document.querySelectorAll('input[type="checkbox"].acceso:not(:checked)');
     MaxAlert = document.querySelectorAll('.MaxError');
     stepsNumbers = document.querySelector('.steps-numbers');
     current = stepsNumbers.querySelector('.current');
     contador = current.querySelector('.number');
     contador.classList.add("fadeInUp");
     contador.innerHTML = numeroAccesosSeleccionados.length;
     setTimeout(function() {
        contador.classList.remove("fadeInUp");
    }, 950);
     


   




   
desactivar();
    
  


}



}

});