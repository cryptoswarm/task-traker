import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Task tracker';
  showTaskTracker: boolean = false;
  subscription!: Subscription;

  //inject the uiservice so we can use its methods
  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showTaskTracker = value));
  }

  ngOnInit(): void { //ngOnInit is a lifecycle method that we use
  }

  toggleAddTask(){
    //console.log('toggle')
    this.uiService.toggleAddTask();
  }

}
