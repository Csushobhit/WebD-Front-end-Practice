import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { ProfileComponent } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, ProfileComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Sushobhit Chattaraj');

  Hello()
  {
    alert("Function Called");
    this.otherfunction();
  }

  otherfunction()
  {
    alert("Other fxn Called");
  }

  name = '';
  displayName = '';
  getName(event: Event)
  {
    const name = (event.target as HTMLInputElement).value;
    this.name = name;
  }
  showName()
  {
    this.displayName = this.name;
  }
  setName()
  {
    this.name = 'Sam';
  }

  email = '';

  getEmail(val: string)
  {
    alert(val);
    this.email = val;
  }

  display = true;

  hide() {
  this.display = false;
  }
  show() {
  this.display = true;
  }
  color = 0;
  color1 = '';
  handleColor(val: string) {
  this.color1 = val;
}

users = ['Anil', 'Sam', 'Peter', 'Bruce'];

}
