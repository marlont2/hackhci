function calculate(){
        var input = $('#expression'); //get the box
        var val = input.val(); //get the value inside the box
        // Here is the actual calculation
        var pattern = /\d+|\+|\-|\*|\/|\(|\)/g
        var tokens = val.match(pattern);
        
        var output = $('#output'); // get the output from input box
        output.text(JSON.stringify(tokens));
    }
    
function read_operand(tokens){
        var num = tokens[0];
        var token_shift = tokens.shift()
        var numint = parseInt(num,10)
        if(numint==NaN){
            throw "number expected"
        }else{
            return numint
        }
    }
    
    
        

        