export class Menu  {
    id: number;
    label: string;
    category: number;
    image: string;
    day:string;
    priceDF: number;

        constructor(
            id : number = 0, 
            label: string = "",
            category: number = 0,
            image : string = "",
            day : string = "",
            priceDF : number = 0,
            ){
                    this.id = id,
                    this.label = label,
                    this.category = category,
                    this.image = image,
                    this.day = day
                    this.priceDF = priceDF;
        }

}

export class AllMealsForTheWeek {
    id: number;
    name: string;
    meals: Menu[];

    constructor(
        id: number = 0,
        name : string = "",
        meals : Menu[] = []
        ){
            this.id = id,
            this.name = name,
            this.meals = meals
    }
}