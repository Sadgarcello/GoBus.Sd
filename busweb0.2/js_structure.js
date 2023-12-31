const myInput = document.getElementById("my-input");

function stepper(btn){
     let id = btn.getAttribute("id");
     let min = myInput.getAttribute("min");
     let max = myInput.getAttribute("max");
     let step = myInput.getAttribute("step");
     let val = myInput.getAttribute("value");
     let calcstep = (id =="increment") ? (step*1) :(step * -1);
     let newValue = parseInt(val) + calcstep;
     
     if(newValue >=  min && newValue <= max){
        myInput.setAttribute("value",newValue);
     }
}
function sendwhatsapp(){
   var phonenumber = "0920192637"
   var place3 = document.querySelector('.place3').value;
   var place = document.querySelector('.place').value;
   var place2 = document.querySelector('.place2').value;
   var date = document.querySelector('.date').value;
   var butto = document.querySelector('.butto').value;

   var url = "https://wa.me/Jquery/prettify.js/"+ phonenumber + "?text="
   +"*اسم الزبون:*" +place3+"%0a"
   +"*الموقع:*" +place+ "%0a"
   +"*الوجهة:*" +place2+ "%0a"
   +"*التاريخ:*" +date+ "%0a"
   +"*عدد التذاكر :*" +butto+ "%0a"
   +"اريد ان احجز عن طريقكم"
   window.open(url, '_blank').focus();
   }


   
   
   