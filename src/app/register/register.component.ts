import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../local-storage.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ControlMessagesComponent} from '../control-messages/control-messages.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userRegisterForm: FormGroup;
  submittedForm = false;

  constructor( private localStorage: LocalStorageService, private fb: FormBuilder, private router: Router) {}


  ngOnInit() {
    this.userRegisterForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailID: ['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.userRegisterForm.controls; }

  saveUser(): void {

    this.submittedForm = true;
    if( this.userRegisterForm.dirty && this.userRegisterForm.valid ) {
      this.localStorage.StoreRegisterDetailsInLocalStorage(this.userRegisterForm);

      this.router.navigate(['/login']);
    }
  }

}
