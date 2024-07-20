import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { UserComponent } from '../user/user.component';
import { HeaderComponent } from '../header/header.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import {type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, UserComponent, HeaderComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask: boolean = false;

  constructor(private taskService:TasksService){
  }
  

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }
}
