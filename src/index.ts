
// https://github.com/Apollo-Level2-Web-Dev/batch-4-be-a-typescript-technocrat/blob/main/practice_probelms.md


// ============================Problem 1:========================================
function formatString(input: string, toUpper?: boolean): string{
    if(toUpper){
        return input.toUpperCase();
    }else{
        return input.toLowerCase() 
    }


}
// console.log(formatString("Hello"));          
// console.log(formatString("Hello", true));   
// console.log(formatString("Hello", false)); 

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

    getInfo(){
        console.log(`Make:${this.make}, Year:${this.year}`)
    }
}


class Car extends Vehicle{
    private model:string;
    constructor(make:string, year:number, model:string){
        super(make, year);
        this.model=model
    }
    getModel(){
        console.log(`Model:${this.model}`)
    }
}

// const myCar = new Car("Toyota", 2020, "Corolla");
// myCar.getInfo();  
// myCar.getModel();  
// ============================Problem 5:========================================

function processValue(value: string | number): number {
if(typeof value === "number"){
    return value*2
}else if(typeof value === "string"){
    return value.length
}
    throw new Error("Invalid input type");
}

// console.log(processValue("hello")); 
// console.log(processValue(10));      
// ============================Problem 6:========================================

interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null{
   if(products.length===0) return null
   let large= products[0];
   for(let i=0; i<products.length; i++){
        if(large.price<products[i].price){
            large = products[i];
        }
   }
   return large;

}
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];

console.log(getMostExpensiveProduct(products))

// ============================Problem 7:========================================
enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string{
   return (day === Day.Saturday || day === Day.Sunday) ? "Weekend" : "Weekday"
}
// console.log(getDayType(Day.Monday));   
// console.log(getDayType(Day.Sunday)); 
// ============================Problem 8:========================================
async function squareAsync(n: number): Promise<number>{
    const result: Promise<number>= new Promise((resolve, reject)=>{
        if(n<0){
            reject(new Error("Negative number not allowed")) 
        }else{
            setTimeout(() => {
                resolve(n * n)
            }, 1000);
        }
    });
    return result
    
}

squareAsync(4).then(console.log);        
squareAsync(-3).catch(console.error);   