import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Hello World! First look for Angular';

  constructor() {}

  ngOnInit(): void {}

  toggleAddTask() {
    console.log('Toggle');
  }
}
