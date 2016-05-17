function palindrome (string){
    if(string != ''){
        var revs = string.split();
        revs = revs.reverse();
        revs= revs.join();
        if(revs == string){
            return true;
        } 
        else{
            return false;
        }
    }
    
        return false;
}