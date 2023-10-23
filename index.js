$(document).ready(function(){
    var inputField = $("input[type='text']");

    
    // Button 
    $("button").not("#equals, #reset, #delete").click(function(){
        var buttonValue = $(this).text();
        inputField.val(inputField.val() + buttonValue);
    });

    // The equal sign function to evaluate the numbers inside the input field
    $("#equals").click(function(){
        var inputValue = inputField.val();
        try {
            inputField.val(eval(inputValue));
        } catch (error) {
            inputField.val("Error");
        }
    });

    // The reset button the input field
    $("#reset").click(function(){
        inputField.val("");
    });

    // Delete button to remove the last character from the input field
    $("#delete").click(function(){
        var currentValue = inputField.val();
        inputField.val(currentValue.slice(0, -1));
    });
});
