import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  array = [
    {
      label: 'In Picking',
      iconClass: 'fa-television',
      dec: '04/23/2024 - 02:45PM',
      selected: false
    },
    {
      label: 'Task Available',
      iconClass: 'fa-home',
      dec: '04/23/2024 - 02:45PM',
      selected: false
    },
    {
      label: 'Fulfilment Available',
      iconClass: 'fa-coffee',
      dec: '04/23/2024 - 02:45PM',
      selected: true
    },
    {
      label: 'Order Created',
      iconClass: 'fa-table',
      dec: '04/23/2024 - 02:45PM',
      selected: false
    }
  ]

}
