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
}
