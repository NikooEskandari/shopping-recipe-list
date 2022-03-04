import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is symply a test"
    , "https://static.onecms.io/wp-content/uploads/sites/9/2021/12/20/sous-vide-pork-chops-FT-RECIPE1221.jpg"),
    new Recipe("Another Test Recipe", "This is symply a test"
    , "https://static.onecms.io/wp-content/uploads/sites/9/2021/12/20/sous-vide-pork-chops-FT-RECIPE1221.jpg"),
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

  OnRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
