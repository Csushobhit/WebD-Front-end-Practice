import { Component, signal,effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {computed} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-signals');
  count = signal(20);

  updateValue() {
  this.count.set(100);
}
increaseValue()
{
  this.count.update((value) => value + 1);
}

x = signal(10);

updateX()
{
  this.x.update((value) => value + 1);
}
y = signal(27);
z = computed(() => this.x() * this.y());

firstname = signal(" ");
lastname = signal (" ");

updatename(fname: string, lname:string)
{
  this.firstname.set(fname);
  this.lastname.set(lname);
}

fullname = computed(() => this.firstname() + " " + this.lastname());



}
