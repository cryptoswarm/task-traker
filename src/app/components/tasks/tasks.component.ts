import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service' //importing the service so we can use their methods
import {Task} from '../../Task'



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:Task[] = [];

  //we should inject the service as a provider in our constructor
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) =>{
      this.tasks = tasks;
    });
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task).subscribe(() =>{ //() empty does not return any
        this.tasks = this.tasks.filter(t => t.id !== task.id) //for each task t where t.id is different from the task we deleted
    })
  }

  toggleReminder(task: Task): void {
    task.reminder = !task.reminder; //when double clicking on a task the reminder will be set to the opposite of what it was
    //console.log(task.reminder);
    this.taskService.updateTaskReminder(task).subscribe(); //update the reminder status on the server
  }

}
