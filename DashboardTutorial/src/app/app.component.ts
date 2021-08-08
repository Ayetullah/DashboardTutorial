import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  sideBarOpen = true;
  ngOnInit(): void {
  }

  title = 'DashboardTutorial';

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
