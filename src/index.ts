
// https://github.com/Apollo-Level2-Web-Dev/batch-4-be-a-typescript-technocrat/blob/main/practice_probelms.md


// ============================Problem 1:========================================
function formatString(input: string, toUpper?: boolean): string{
    if(toUpper){
        return input.toUpperCase();
    }else{
        return input.toLowerCase() 
    }


}
// console.log(formatString("Hello"));          // Output: "HELLO"
// console.log(formatString("Hello", true));   // Output: "HELLO"
// console.log(formatString("Hello", false));  // Output: "hello"

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


// console.log(filterByRating(books))

// ============================Problem 3:============ generic function that concatenates multiple arrays of the same type using rest parameters=======================================
function concatenateArrays<T>(...arrays: T[][]): T[]{
    let result :T[]=[];
    for(let i =0; i<arrays.length; i++){
    const currentArray = arrays[i];
    // console.log(currentArray)
        for (let j = 0; j < currentArray.length; j++){
            // console.log(arrays[i])
            result.push(currentArray[j]);
        }
    }
    return result;
}
// console.log(concatenateArrays([1, 2], [3, 4], [5]));
// console.log(concatenateArrays(["a", "b"], ["c"]))
// ============================Problem 4:========================================

class Vehicle{
    private make:string;
    private year :number
    constructor(make:string, year:number){
        this.make=make;
        this.year=year

    }
}


class Car extends Vehicle{
    private model:string;
    constructor(make:string, year:number, model:string){
        super(make, year);
        this.model=model
    }
}
// ============================Problem 5:========================================
// ============================Problem 6:========================================
// ============================Problem 7:========================================
// ============================Problem 8:========================================