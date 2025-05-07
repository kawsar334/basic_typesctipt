
// https://github.com/Apollo-Level2-Web-Dev/batch-4-be-a-typescript-technocrat/blob/main/practice_probelms.md



function formatString(input: string, toUpper?: boolean): string{
        
    if(toUpper){
        return input.toUpperCase();
    }else{
        return input.toLowerCase() 
    }


}


console.log(formatString("Hello"));          // Output: "HELLO"
console.log(formatString("Hello", true));   // Output: "HELLO"
console.log(formatString("Hello", false));  // Output: "hello"