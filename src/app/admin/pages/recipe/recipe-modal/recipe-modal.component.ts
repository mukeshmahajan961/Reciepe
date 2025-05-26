import { Component, EventEmitter, Output } from '@angular/core';
import { Recipes } from '../../../../../entites/Recipes';

@Component({
  selector: 'app-recipe-modal',
  templateUrl: './recipe-modal.component.html',
  styleUrl: './recipe-modal.component.css'
})
export class RecipeModalComponent {
isOpen = false;

  // This event will send the new record data back to parent
  @Output() saveRecord = new EventEmitter<any>();

  // Model for form inputs
  newRecipe = new Recipes();

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
    this.resetForm();
  }

  resetForm() {
    this.newRecipe = { id: '', title: '', description: '', stateId: '', image: '', isFavourite: false, reviews: [] };
  }

  onSave() {
    if (this.newRecipe.title.trim() && this.newRecipe.description.trim()) {
      // Generate ID (simple)
      this.newRecipe.id = Date.now().toString();

      this.saveRecord.emit(this.newRecipe); // send data to parent
      this.closeModal();
    } else {
      alert('Please fill all fields');
    }
  }
}
