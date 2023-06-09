import { Component, OnInit } from '@angular/core';
import { provideRouter } from '@angular/router';

@Component({
  selector: 'app-login-form-component',
  templateUrl: './login-form-component.component.html',
  styleUrls: ['./login-form-component.component.css'],
  
})
export class LoginFormComponentComponent {

submit(login: any) {
  console.log ("Submitted", login);
}

}
