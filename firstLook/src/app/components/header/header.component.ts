import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Hello World! First look for Angular';
  showAddTask: boolean = false;
  subsciption: Subscription = new Subscription();

  constructor(private uiService: UiService) {
    this.subsciption = this.uiService
      .onToggle()
      .subscribe(value => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
