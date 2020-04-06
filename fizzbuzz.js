//Here are a few solutions of mine ===> FOR BOTH GURUS AND ANY LEVEL PROGRAMMER

//#### The function call for THESE SOLUTIONS allows the user to dynamically generate his/her starting point and ending point for the fizzbuzz

//###### FOR GURUS ####
//### With BOTH FUNCTION AND ARRAY
const fizzbuzz = (a, b) => {
    const newArr = []
    for (let i = a; i <= b; i++) newArr.push((i % 3 ? '' : 'Fizz') + ((i % 5) ? '' : 'Buzz') || i)
    return newArr
}

// ######### FOR ANY LEVEL PROGRAMMER, this one will be easier to understand
// ###### without array
const fizzbuzz = (a, b) => {
    for (let i = a; i <= b; i++) {
        if (i % 15 === 0) document.writeln('FizzBuzz <br>');
        else if (i % 3 === 0) document.writeln('Fizz <br>');
        else if (i % 5 === 0) document.writeln('Buzz <br>');
        else document.writeln(i + '<br>')
    }
}

// THE CALL
console.log(fizzbuzz(parseInt(prompt("Starting number")), parseInt(prompt('Ending number'))))

// ##### document.writeln or document.write is for displaying on your solution on the browser interface instead of on the browser console