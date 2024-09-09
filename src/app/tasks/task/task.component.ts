import { TasksService } from './../tasks.service';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task?: Task;
  @Output() complete = new EventEmitter<string>();
  private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task!.id);
  }
}
