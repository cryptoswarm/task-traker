import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http' //we should add it as module to app.module.ts
//import { Observable, of } from 'rxjs';
import { Observable } from 'rxjs';
//import { TASKS } from 'src/app/mock-tasks';
import {Task} from '../Task'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl: string = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }

  //this works but it is not using observable
  // getTasks(): Task[] {
  //   return TASKS;
  // }
  //we should use obserbales because we are fetching data from server asynchronously

  getTasks(): Observable<Task[]> {
    // const tasks = of(TASKS); use these 2 lines if we do not have a backend api
    // return tasks;
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task) : Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url); //${this.apiUrl}/${task.id}
  }

  updateTaskReminder(task: Task) : Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }
}
