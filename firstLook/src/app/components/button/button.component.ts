import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() color: string = '';
  @Input() text: string = '';
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  //function onClick
  onClick() {
    console.log('Clicked button ' + this.text);
    if (this.color == 'green') {
      this.color = 'red';
    } else {
      this.color = 'green';
    }

    this.btnClick.emit();
  }
}
