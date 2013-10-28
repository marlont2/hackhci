/*
This script will contain all of the necessary functions for a web calculator.
It contains the calculate function, read_operand function, and the evaluate 
function. 
*/

function calculate(){
    var input = $('#expression'); //get the box
    var val = input.val(); //get the value inside the box
    // Here is the actual calculation
    var pattern = /\d+|\+|\-|\*|\/|\(|\)/g //The pattern matching
    var tokens = val.match(pattern); //Finds the operators in the value
    var output = $('#output'); // get the output from input box
    output.text(JSON.stringify(tokens));
}
    
function read_operand(tokens){
    try{
    var num = tokens[0]; //num is set to the first array element
    var token_shift = tokens.shift() //the first element is removed from array
    var numint = parseInt(num,10) //The variable for an integer in the array
    if(isNaN(numint)){
        throw "number expected"
    }else{
        return [numint,tokens]
    }
    }
    catch(err){
        return err
    }
    }
    
function evaluate(tokens){
    if(tokens.length < 1){
        throw "missing operand"
    }
    var val_array = read_operand(tokens)
    while(tokens.length > 1){
        
    }
}
    