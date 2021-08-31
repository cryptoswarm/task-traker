import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask : boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask() {
    console.log('toggle 123')
    this.showAddTask = !this.showAddTask; //set it to the opposite of whatever the value was
    this.subject.next(this.showAddTask); //set the current value in the subject
  }

  onToggle() : Observable<any> {
    return this.subject.asObservable(); //create an observable from the subject
  }


}
