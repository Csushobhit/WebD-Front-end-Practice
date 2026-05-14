import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('counter-application');
  count = 0;

  increment()
  {
    this.count++;
  }

  decrement()
  {
    this.count--;
  }

  reset()
  {this.count = 0;

  }

}
