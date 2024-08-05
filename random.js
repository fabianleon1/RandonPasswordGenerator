
'use strict'


const range=document.getElementById('customRange2');
const p= document.getElementById('random');
const accion=document.getElementById('botonaccion');

const reset=document.getElementById('reset');


    reset.addEventListener('click', function(){
        p.innerHTML="";
    })
   

   range.addEventListener('change', function() {
    // Obtener el valor actual del rango
    const valorActual = range.value;
    
    // Hacer algo con el valor actual, por ejemplo, mostrarlo en consola

    const random = ()=>{


        const characters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%&/()=¿?*';
        let result= '';
        const charactersLength=characters.length;
    
        for(let x=0 ; x<valorActual; x++){
            result+=characters.charAt(Math.floor(Math.random() * charactersLength));
        }
       
        return result;
       
    };
    p.innerHTML=random();
   })







//console.log(random(20));
//console.log(range);