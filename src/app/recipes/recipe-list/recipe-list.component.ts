import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A Test Recipe', 'This is a test', 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjFh7i5n8zmAhXsN-wKHZX1DzUQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DgILkXp6XZdM&psig=AOvVaw0dvnnNiuzxuPiFHnHk80Ae&ust=1577206830274066')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
