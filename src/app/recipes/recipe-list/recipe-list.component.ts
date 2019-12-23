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
    new Recipe('A Test Recipe', 'This is a test', 'https://parkerdo.hu/wp-content/uploads/2018/01/H%C5%B1v%C3%B6sv%C3%B6lgyi-Nagyr%C3%A9t_02-696x464.jpg'),
    // tslint:disable-next-line:max-line-length
    new Recipe('A Test Recipe', 'This is a test', 'https://parkerdo.hu/wp-content/uploads/2018/01/H%C5%B1v%C3%B6sv%C3%B6lgyi-Nagyr%C3%A9t_02-696x464.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
