<<<<<<< HEAD
/*function palindrome (string){
=======


function palindrome (string){
    // checks if input sring is empty
>>>>>>> 9fed1d56ab797172280dbc413cecd0a3285f4209
    if(string != ''){
         // splits the input string into an array 
        var reverse = string.split('');

       // calls the reverse method on the array
        reverse = reverse.reverse();

        // converts the array back to a string
        reverse= reverse.join('');

        // checks for equality between the input string and the reversed string 
        // returns true or false.
        if(reverse === string){
            return true;
        } 
        else{
            return false;
        }
    }
    
        return false;
}*/

//A shorter solution
function checkPalindrome(palindrome) {
    return palindrome == palindrome.split('').reverse().join('');
}
<<<<<<< HEAD

 
=======
window.addEventListener('load',start, false);
>>>>>>> 9fed1d56ab797172280dbc413cecd0a3285f4209
