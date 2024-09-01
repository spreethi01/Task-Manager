import { Component } from '@angular/core';
import { HeaderComponent } from './Header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './task/task.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,UserComponent,TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  users = DUMMY_USERS;

  selected_id?:string; 

  get User(){
    return this.users.find((e)=>e.id===this.selected_id)!;
  }

  onSelect(id:string){
    console.log(id);
    this.selected_id = id;
  }
  
}
