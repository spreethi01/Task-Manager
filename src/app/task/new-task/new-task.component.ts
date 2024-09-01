import { Component,EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface newTask {
  title : string;
  summary : string;
  date : string;
}

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancle = new EventEmitter();
  @Output() add = new EventEmitter<newTask>();

  title ='';
  summary = '';
  date='';

  onCancle(){
    this.cancle.emit();
  }

  onSubmit(){
    this.add.emit({
      title : this.title,
      summary:this.summary,
      date:this.date
    })
  }
}
