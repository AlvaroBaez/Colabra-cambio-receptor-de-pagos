



$(document).ready(function(){

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




// for(o=0;o<tableResS.length;o++){
//   tableResS[o].parentElement.classList.add('responsive_table_s_cont');
// }

// for(i=0; i < tableRes.length; i++){

//   var countTr = tableRes[i].getElementsByTagName('tr');
//   for(a=0; a<countTr.length; a++){
    
//     indexTable = document.createElement('span');
//     indexTable.classList.add('indexTable');
//     indexTable.innerHTML = a;
//     countTr[a].prepend(indexTable);
    
//   } 

//  var tableHead = tableRes[i].getElementsByTagName('thead');


//  var indexVal = tableHead[0].getElementsByClassName('th');
  
//   var fila = tableRes[i].getElementsByTagName('td');
  
//   for(f=0;f<fila.length;f++){
    
//     var columnas = fila[f].getElementsByClassName('th_movil');
    
//     for(c=0;c<columnas.length;c++){
      
//       columnas[c].innerHTML = indexVal[c].innerHTML;
//     }

//   }
// }





  

//   var tableTitle = document.getElementsByClassName('table_title');
//   var tableDatos = document.getElementsByClassName('table_datos');
  
//   for(e = 0; e < tableDatos.length; e++){
//     alert(tableDatos[1].children.length);
//     for(i=0;i<tableTitle.length;i++){
//       tableDatos[e].children[i].innerHTML = tableTitle[i].innerHTML
//     }
// }





 

});