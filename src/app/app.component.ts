import { Component } from '@angular/core';

interface Ticket {
  title: string;
}
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

  tickets: Ticket[] = [
    { title: 'Python' },
    { title: 'java' },
    { title: 'JavaScript' },
    { title: 'Angular' },
    { title: 'Vue' },
  ];
  userRegister() {
    this.registed = true;
    this.message = 'User registration';
  }
}
