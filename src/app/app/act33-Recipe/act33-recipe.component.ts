import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Recipe } from './act33-model';
import { RecipeService } from '../act33-service';


@Component({
  selector: 'app-act33-recipe',
  templateUrl: './act33-recipe.component.html',
  styleUrl: './act33-recipe.component.css'
})
export class Act33RecipeComponent {
  recipe: Recipe[]=[];
  constructor(private recipeService:RecipeService){

  }
  ngOnInit(): void {
    this.recipe = this.recipeService.getRecipe();
  }
}
