import { Component, signal, effect, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from './user/user';
import{UserService} from './user';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('angular-advance');

  name = signal('Sushobhit');
  serviceUserName = '';
  
  constructor(private userService:
    UserService)
  {
    
    effect(() =>{
      alert(this.name());
    })
  }
  ngOnInit()
{
 alert('ngOnInit Called');

 this.serviceUserName = this.userService.getUserName();
}
  updateName()
{
  this.name.set('Sam');
}

  username = '';
  setName()
  {
    this.username = 'Sushobhit';
  }

  userName = 'Sus';
  userAge = 22;

  handleNameChange(
newName: string
)
{
  this.userName =
newName;
}



}
