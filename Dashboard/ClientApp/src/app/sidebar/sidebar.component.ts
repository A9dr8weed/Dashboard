import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  links = [
    { Name: 'Sales Volume', value: '/sales' },
    { Name: 'Latest Orders', value: '/orders' },
    { Name: 'System Health', value: '/health' }
  ]

  constructor() { }

  ngOnInit() {
  }
}
