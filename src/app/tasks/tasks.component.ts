import { Component, Input } from '@angular/core';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  @Input() name?: string;
  @Input() userId?: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {

  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId!);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
