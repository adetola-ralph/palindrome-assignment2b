function palindrome (string){
    if(string != ''){
        var rev = string.split();
        rev = rev.reverse();
        rev= rev.join();
        if(rev == string){
            return true;
        } 
        else{
            return false;
        }
    }
    
        return false;
}