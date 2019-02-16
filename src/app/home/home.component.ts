import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { DisplayRecipeDetailsComponent} from '../dispaly-recipe-details/display-recipe-details.component';
import { ControlMessagesComponent} from '../control-messages/control-messages.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public recipeDetails: any;
  searchRecipeForm: FormGroup;

  constructor( private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
    this.searchRecipeForm = this.fb.group({
      recipeName: ['Whole Chicken', [Validators.required]]
    });

    this.getRecipeDetails();
  }

  getRecipeDetails(): void {

    this.http.get('https://api.nutritionix.com/v1_1/search/'
                + this.searchRecipeForm.controls.recipeName.value + '?results=0:1&fields=*&appId='
                + '872bc2b8&appKey=7aa745ba7ec8f1cfc700fdcf7798ac0d').subscribe(data => {
      this.recipeDetails = data;
    });

    responsiveVoice.speak(this.searchRecipeForm.controls.recipeName.value );

  }
}
