import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router} from '@angular/router';

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
  //Router should be injected as well as a provider
  constructor(private uiService: UiService, private router: Router) {
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

  //we should add *ngIf="hasRoute('/')" in the html file, so add button will be shown only on the home page not the about neither the footer
  hasRoute(route: string): boolean {
    return this.router.url === route;
  }

}
