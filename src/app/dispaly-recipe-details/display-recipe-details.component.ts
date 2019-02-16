import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-display-recipe-details',
  templateUrl: './display-recipe-details.component.html',
  styleUrls: ['./display-recipe-details.component.css']
})
export class DisplayRecipeDetailsComponent implements OnInit {

  @Input() recipeDetails: any;
  constructor() { }

  ngOnInit() {
  }

}
