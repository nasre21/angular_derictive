import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Register user';
  message = '';
  registed: boolean = false;
  firstName!: string;
  lastName!: string;

  userRegister() {
    this.registed = true;
    this.message = 'User registration';
  }
}
