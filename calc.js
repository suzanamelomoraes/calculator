var number;
function calculator(arr){    
    number = Number(arr[0]);
   for(var i = 1; i < arr.length; i++){
        var nextNum = Number(arr[i+1]);
        var symbol = arr[i];
        
        if(symbol === '+'){number += nextNum;}
        else if (symbol === '-'){number -= nextNum;}
        else if (symbol === '*'){number *= nextNum;}
        else if (symbol === '/'){number /= nextNum;}
        else if (symbol === '%'){number /= 100;}
   }
    if(number < 0){
        number = Math.abs(number);
    }
    
    return number;
}