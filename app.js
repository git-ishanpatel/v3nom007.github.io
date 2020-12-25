//selectors
const Input = document.querySelector('#number');
const btn = document.querySelector('#guess-btn');
const Output = document.querySelector('.output');
const maxNum = 10;
const minNum = 0;
let guess = 0;


let winningNumber = Math.trunc(Math.random()*10) +1;



//Event Listeners 
  
btn.addEventListener('click', function(){
    
    
   
    if(Input.value > maxNum || Input.value < minNum || Input.value == '') {
        Output.innerHTML = 'Please Enter a number in range 1 to 10..'
           
        
     }
                 else if(Input.value == winningNumber){
                          Output.innerHTML = `Congrats!! You have Won and the winning number is ${winningNumber}`
                          
                        }
                       
                        

                 else if(Input.value != winningNumber){
                           Output.innerHTML = `Wrong Number Try again.. :( guesses used:${guess+1}`
                           
                        }
                       
                if(guess>=3){
                    Output.innerHTML = 'You lost! Try again'
                    
                }
                if(guess < 3 ) {
                    guess+=1;
                }              
                        
                setTimeout(() => {
                    Output.innerHTML = '';
                    
                }, 3000);
                
    
    
});