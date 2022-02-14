import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() color: string = '';
  @Input() text: string = '';

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
  }
}
