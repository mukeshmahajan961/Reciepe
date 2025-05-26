import { Component, OnInit, ViewChild } from '@angular/core';
import { RecipeService } from '../../../../../services/recipe.service';
import { Recipes } from '../../../../../entites/Recipes';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipeModalComponent } from '../recipe-modal/recipe-modal.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  @ViewChild(RecipeModalComponent) modal!: RecipeModalComponent;
  public recipes: Recipes[] = [];

  public recipeForm!: FormGroup;

  ngOnInit(): void {
    this.getRecipes();
    this.recipeForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      isFavourite: new FormControl(false),
      stateId: new FormControl('', Validators.required)
    });
  }
  constructor(public recipeService: RecipeService) { }
  getRecipes() {
    this.recipeService.getRecipes().subscribe(
      (res) => {
        this.recipes = res;
      })
  }
  editRecipe(recipe: Recipes) {
    this.recipeForm.patchValue({
      title: recipe.title,
      description: recipe.description,
      image: recipe.image,
      isFavourite: recipe.isFavourite,
      stateId: recipe.stateId
    });
    this.modal.openModal();
  }
  deleteRecipe(recipe: any) {
    const confirmDelete = confirm('Are you sure you want to delete this recipe?');
    if (confirmDelete) {
      this.recipes = this.recipes.filter(r => r.id !== recipe.id);
    }
  }

  onSubmit() {
    if (this.recipeForm.valid) {
      // Create new recipe object with a generated id (simple example)
      const newRecipe = {
        id: Date.now().toString(), // generate unique id using timestamp
        title: this.recipeForm.value.title,
        description: this.recipeForm.value.description,
        image: this.recipeForm.value.image,
        isFavourite: this.recipeForm.value.isFavourite,
        stateId: this.recipeForm.value.stateId,
        reviews: []
      };

      // Add new recipe to the list
      this.recipes.push(newRecipe);

      // Reset the form after submission
      this.recipeForm.reset();
    }
  }

  openAddModal() {
    this.modal.openModal();
  }

  addRecipe(recipe: any) {
    this.recipes.push(recipe);
  }

}
