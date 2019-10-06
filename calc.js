let entries = [];
let temp = '';


document.addEventListener('click', function () {
    let value = event.target.value;
    playClick();

    //check if it is a number and add temp to entries
    if (!isNaN(value) || value === '.') {
        temp += value;
        document.getElementById("answer").value = temp.substring(0, 10);

        //clear data by AC button
    } else if (value === "AC") {
        entries = [];
        temp = '';
        document.getElementById("answer").value = '';

        //clear the last data typed by CE button
    } else if (value === 'CE') {
        temp = '';
        document.getElementById("answer").value = '';

        //add temp when got a symbol other than equals, add symbol and clear temp
    } else if (value === "=") {
        entries.push(temp);
        calculator(entries);
        document.getElementById("answer").value = number;
        entries = [];
        temp = '';

        //add numbers into the array
    } else {
        entries.push(temp);
        entries.push(value);
        document.getElementById("answer").value = value;
        temp = '';
    }

});
//function to perform operations
var number;
function calculator(arr) {
    number = Number(arr[0]);
    for (var i = 1; i < arr.length; i++) {
        var nextNum = Number(arr[i + 1]);
        var symbol = arr[i];

        if (symbol === '+') { number += nextNum; }
        else if (symbol === '-') { number -= nextNum; }
        else if (symbol === '*') { number *= nextNum; }
        else if (symbol === '/') { number /= nextNum; }
        else if (symbol === '%'){number = number * nextNum / 100;}
    }
    if (number < 0) {
        number = Math.abs(number);
    }

    return number;
}

function playClick() {
    let audio = new Audio("sounds/click1.mp3")
    audio.play();
}
document.addEventListener('click', playClick)