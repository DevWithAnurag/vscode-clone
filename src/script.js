function runCode() {
    // Get the user's code from the textarea
    var userCode = document.getElementById('user-code').value;

    try {
        // Evaluate the user's code
        var result = eval(userCode);

        // Display the result in the output div
        document.getElementById('output').innerHTML = "Result: "+String(result);
        openConsole();
    } catch (error) {
        // If an error occurs, display the error message
        document.getElementById('output').innerHTML = 'Error: ' + error.message;
        openConsole();
    }

}



function openConsole() {
    let outputConsole=document.querySelector(".output-console");
    outputConsole.classList.toggle('up-animation');
}

