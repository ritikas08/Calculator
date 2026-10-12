const display=document.getElementById('display');
const buttons=document.querySelectorAll(' button');

buttons.forEach(button =>{
    button.addEventListener('click',(e)=>{
        const currentButton = e.currentTarget;
        const buttonText = currentButton.innerText.trim();

        if(buttonText === 'C' || buttonText === 'AC'){
            display.value='';
        }
        else if (currentbutton.classList.contains('backspace') || buttonText === '⌫') {
            display.value=display.value.slice(0,-1);
        }
        else if (buttonText=== '='){
            try{
                
                display.value = eval(display.value);
            }
        
            catch(error){
                display.value='Error';
            }
        }
        else{
            display.value += buttonText;
        }
    });
});