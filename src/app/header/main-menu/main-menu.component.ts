import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  mainMenuItems: string[] = ['Home', 'Products', 'About', 'Contact', 'sales'];

  constructor() { }

  ngOnInit() { }

}
