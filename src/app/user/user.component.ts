import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) id!:string;
  @Input({required:true}) avatar!:string;
  @Input({required:true}) name!:string;
  @Output() select = new EventEmitter ();
  @Input({required : true}) selected!:boolean;


  get imgPath(){
    return 'assets/users/'+this.avatar;
  }

  onSelcted(){
    this.select.emit(this.id);
  }

}
