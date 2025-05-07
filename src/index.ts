
// https://github.com/Apollo-Level2-Web-Dev/batch-4-be-a-typescript-technocrat/blob/main/practice_probelms.md


// ============================Problem 1:========================================
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

// ============================Problem 2:========================================

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    const filterArray= items.filter((item)=>item?.rating>=4)
    return filterArray
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];


console.log(filterByRating(books))

// ============================Problem 3:========================================
// ============================Problem 4:========================================
// ============================Problem 5:========================================
// ============================Problem 6:========================================
// ============================Problem 7:========================================
// ============================Problem 8:========================================