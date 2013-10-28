/*
This script will contain all of the necessary functions for a web calculator.
It contains the calculate function, read_operand function, and the evaluate 
function. 
*/

function calculate(){
    var input = $('#expression'); //get the box
    var val = input.val(); //get the value inside the box
    // Here is the actual calculation
    var pattern = /\d+|\+|\-|\*|\/|\(|\)/g; //The pattern matching
    var tokens = val.match(pattern); //Finds the operators in the value
    var output = $('#output'); // get the output from input box
    output.text(JSON.stringify(tokens));
}
    
function read_operand(tokens){
    try{ 
    var num = tokens.shift(); //num is set to the first element and removed from array
    var numint = parseInt(num,10); //The variable for an integer in the array
    if(isNaN(numint)){
        throw "number expected";
    }else{
        return numint;
    }
    }
    catch(err){
        return err;
    }
    }
    
function evaluate(tokens){
    if(tokens.length === 0){
        throw "missing operand";
    }
    var val = read_operand(tokens);
    while(tokens.length > 0){
        var operator = tokens.shift();
        if((operator!="+")&&(operator!="-")&&(operator!="*")&&(operator!="/")){
            throw "unrecognized operator";
        }else if(tokens.length === 0){throw "missing operand"}
        var temp = read_operand(tokens);
        if(operator=="+"){val = val + temp}
        else if(operator=="-"){val = val - temp}
        else if(operator=="*"){val = val * temp}
        else if(operator=="/"){val = val / temp}
    }    
    return val;
    }

    