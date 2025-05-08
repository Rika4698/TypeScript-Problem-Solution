
function formatString(input:string, toUpper?: boolean):string{
    if (toUpper === false) {
        return input.toLowerCase();
      }
      return input.toUpperCase();

}



 function filterByRating(items:{title:string; rating:number}[]) : {title:string; rating:number}[]{
    const itemFilter = items.filter(product => product.rating >= 4);
    return itemFilter;
 }
 





function concatenateArrays<T>(...arrays:T[][]):T[]{
    const allArrays = ([]as T[]).concat(...arrays);
    return allArrays;

}






class Vehicle {
    private make: string;
    private year: number;
    constructor(make:string, year:number){
        this.make = make;
        this.year = year;
    }
    getInfo():string{
        return `"Make: ${this.make}, Year: ${this.year}"`
    }
}
class Car extends Vehicle{
    private model: string;
    constructor(make:string,year:number,model:string){
        super(make, year);
        this.model = model;
    }
    getModel(): string{
        return `"Model: ${this.model}"`
    }
}




function processValue(value: string|number):number{
     
    const process = (typeof value === 'string'? value.length: value * 2);
    return process;
}





interface Product{
    name: string;
    price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null{
    if(products.length === 0) return null;
    const expensiveProduct = products.reduce((highest , current) => current.price > highest.price ? current:highest );
    return expensiveProduct;
}





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
    const weekDay = (day === Day.Saturday|| day === Day.Sunday?"Weekend":"Weekday");
    return weekDay;
  }






  async function squareAsync(n: number): Promise<number>{

    if (n < 0) {
        return Promise.reject(new Error("Negative number not allowed"));
      }
      return new Promise(resolve => {
        setTimeout(() => resolve(n * n), 1000);
      });
  }








