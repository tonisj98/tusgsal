var total = document.getElementById("total");
var entradah ="";
var minutos="";




console.log(entradah)


console.log(salidah)






console.log(diff_hours(dt1, dt2));


function diff_hours() 
 {
    entradah = document.getElementById("entradah").value + ":00";
    salidah = document.getElementById("salidah").value + ":00";
    dt1 = new Date("October 13, 2014 " + entradah);
    dt2 = new Date("October 13, 2014 " + salidah);
  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
 
  diff /= (60);
  
  return timeConvert(diff);
  
//   return Math.abs(Math.round(diff));
  
 }

 function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    var  texto= rhours + " horas y " +  rminutes + " minutos";

    total.innerHTML = texto;
    return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
    }