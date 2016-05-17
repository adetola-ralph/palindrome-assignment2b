function palindrome (string){
    if(string != ''){
        var new_string = string.split('');
        new_string = new_string.reverse();
        new_string= new_string.join('');
        if(new_string == string){
            return true;
        } 
        else{
            return false;
        }
    }
    
        return false;
}
