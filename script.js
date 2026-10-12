const display=document.getElementById('display');
const buttons=document.querySelectorAll(' button');

buttons.forEach(button =>{
    button.addEventListener('click',(e)=>{
        const currentButton = e.currentTarget;
        const buttonText = currentButton.innerText.trim();

        if(buttonText === 'C' || buttonText === 'AC'){
            display.value='';
            return;
        }
           
         if (currentButton.classList.contains('backspace') || buttonText === '⌫') {
                if(display.value==='Error'){
                    display.value='';
                }else{
            display.value=display.value.slice(0,-1);
        }
                return;
            }

         if (buttonText=== '='){
            try{
                
                display.value = eval(display.value);
            }
        
            catch(error){
                display.value="Error";
            }
             return;
        }
             if(display.value==='Error'){
                 return;
             }
    
            display.value += buttonText;
    
    });
});
