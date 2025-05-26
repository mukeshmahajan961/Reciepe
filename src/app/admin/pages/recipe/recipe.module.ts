import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeService } from '../../../../services/recipe.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeModalComponent } from './recipe-modal/recipe-modal.component';


@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeModalComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    HttpClientModule ,
    FormsModule,
    ReactiveFormsModule
  ],
   providers: [
    RecipeService
  ]
})
export class RecipeModule { }
