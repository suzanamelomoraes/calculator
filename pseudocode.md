# Calculator Pseudocode

Create an empty string variable to receive the values from the buttons and push it to an array;
Create an empty array variable that will receive all the information received for each operation - var entries = [ ];

Get the element button from HTML and add an event on at all times that this button is clicked to execute a function from this action.

Inside the function, the button clicked by the user, brings a value that will be received in a variable. Push the inputted data to inside the array [item, symbol, item]

After received item plus symbol plus item, we expect to receive the equal sign
When receive the equal signal perform the calculation: 
push it into the array with the others numbers and symbols already added.
Create a variable to receive the first item of the array -> Var number = entries[0]
Go through the length of the array with a for loop to access all the items of the array to get the first item, the symbol and the last item to perform the calculation
Item + item
Item * item
Item - item
Item / item
Adjust the - operator to work properly changing it to an absolute value
(Value from 1 to 10 < 0 -> Value = math.abs(nt) + '-' )
Keep the first item outside the loop as we need it to adjust the - operator 

Display the answer

If the user clicks on AC to clear the calculator, make the array empty again - entries [ ]
Clean the var temp = ' ', display total = 0

If the user clicks on CE to clear the last data, make the temp an empty string again -> temp = ' '; Not the array as it is only the last one


