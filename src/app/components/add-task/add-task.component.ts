import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task'
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask : EventEmitter<Task> = new EventEmitter();

  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showTaskTracker!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showTaskTracker = value));
  }

  //the value in the constructor will allow us to use *ngIf="showTaskTracker" in the html form so the form will be shown or not

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert('Please add a task!');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    }
    this.onAddTask.emit(newTask);
    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
