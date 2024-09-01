import { Component, Input } from '@angular/core';
import {TasksComponent} from './tasks/tasks.component';
import {NewTaskComponent} from './new-task/new-task.component'

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TasksComponent,NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) name!:string;
  @Input({required:true}) userId!:string;

  isAddTaskStated:boolean=false;

  tasks=[
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    }
  ]

  get Selected(){
    return this.tasks.filter((e)=>e.userId === this.userId);
  }

  onCompleteTask(id:string){
    this.tasks=this.tasks.filter((e)=>e.id!=id);
  }

  onStartAddTask(){
    this.isAddTaskStated=true;
  }

  onCancle(){
    this.isAddTaskStated=false;
  }

  addNewTask(newTask:{title :string, summary :string, date : string}){
    this.tasks.push({
      id: Date.now().toString(),
      userId: this.userId,
      title:newTask.title,
      summary:newTask.summary,
      dueDate:newTask.date
    })
    this.isAddTaskStated=false;
  }

}
