import { Injectable } from "@angular/core";
import { Recipe } from "./act33-Recipe/act33-model";

@Injectable({
providedIn: "root", 
})
export class RecipeService{
    private food: Recipe[]=[
        {
            id: 1,
            name: 'Fried Grasshopper',
            details:'Grasshopper was caught in Oz',
            img:'bug1.jpg',
        },
        {
            id: 2,
            name: 'Clam Deluxe',
            details:'A special clam that was harvested in Atlantis',
            img:'bug2.jpg',
        },
        {
            id: 3,
            name: 'Stir-fried Maggots ',
            details:'Cultured maggots from Wonderland',
            img:'bug3.jpg',
        },
        {
            id: 4,
            name: 'Expensive Fried Frogs',
            details:'Frogs imported from Hogwarts',
            img:'bug4.jpg',
        },
        {
            id: 5,
            name: 'Lechong Buwaya',
            details:'Crocodile from Neverland,filled with human flesh',
            img:'bug5.jpg',
        },
        {
            id: 6,
            name: 'Fancy Chocolate Bichessa',
            details:"Chocolate imported from Willy Wonka's Chocolate Factory",
            img:'bug6.jpg',
        },
        {
            id: 7,
            name: 'Pinoy Fruit Salad',
            details:'Very pinoy ingredients and milk was produced by Boysen',
            img:'bug7.jpg',
        },
        {
            id: 8,
            name: 'Sphaghelly',
            details:'A spaghetty inside the jelatin, and sausages',
            img:'bug8.jpg',
        },
        {
            id: 9,
            name: 'Grilled Tarantula',
            details:'Tarantula imported from China, and it was cooked with its family',
            img:'bug9.jpg',
        },
        {
            id: 10,
            name: 'Sweet Sausage Sandwich',
            details:'Combination of abomination, sweet and savory!',
            img:'bug10.jpg',
        },
        {
            id: 11,
            name: 'Century Egg',
            details:'An egg preserved for centuries',
            img:'bug11.jpeg',
        },
        {
            id: 12,
            name: 'Yummy Fried Kitty',
            details:'Expensive delicacy with cursed ingredients',
            img:'bug12.jpg',
        },
        
    ];

    getRecipe():Recipe[]{
        return this.food;
    }
}