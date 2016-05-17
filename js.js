

function palindrome (string){
    // checks if input sring is empty
    if(string != ''){
		// splits the input string into an array
		var stringArray = string.toLowerCase().replace(/[\W+\s+\_]/g,"");
        var new_string = stringArray.split('');
		
		// calls the reverse method on the array
        new_string = new_string.reverse();
		
		// converts the array back to a string
        new_string= new_string.join('');
		
		// checks for equality between the input string and the reversed string 
        // returns true or false.
        if(new_string == stringArray){
            return true;
        } 
        else{
            return false;
        }
    }
    
        return false;
}
