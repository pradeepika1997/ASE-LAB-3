import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ValidationService} from '../validation.service';

@Component({
  selector: 'app-control-messages',
  templateUrl: './control-messages.component.html',
  styleUrls: ['./control-messages.component.css']
})
export class ControlMessagesComponent implements OnInit {

  // @ts-ignore
  validationMessage: string;
  @Input() control: FormControl;

  constructor() { }

  ngOnInit() {
  }

  // @ts-ignore
  get validationMessage() {
    for ( const propertyName in this.control.errors) {
      if ( this.control.errors.hasOwnProperty(propertyName) && this.control.dirty && this.control.touched) {
        return ValidationService.getValidationErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }
}
