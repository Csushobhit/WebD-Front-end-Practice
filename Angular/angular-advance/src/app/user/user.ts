import {
 Component,
 Input,
 Output,
 EventEmitter
}
from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {

  @Input()
  name = '';

  @Input()
  age = 0;

  @Output()
  changeNameEvent = new EventEmitter<string>();

  changeName()
{
  this.changeNameEvent
  .emit('Sam');
}
}