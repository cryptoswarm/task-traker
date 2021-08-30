import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text! : string;
  @Input() color! : string;

  @Output() btnClick = new EventEmitter(); //button.component will be used so text emitted will change

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    //console.log('add');
    this.btnClick.emit();
  }

}
