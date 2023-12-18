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
      description: '04/23/2024 - 02:45PM',
      isActive: false
    },
    {
      label: 'Task Available',
      iconClass: 'fa-home',
      description: '04/23/2024 - 02:45PM',
      isActive: false
    },
    {
      label: 'Fulfilment Available',
      iconClass: 'fa-coffee',
      description: '04/23/2024 - 02:45PM',
      isActive: false
    },
    {
      label: 'Order Created',
      iconClass: 'fa-table',
      description: '04/23/2024 - 02:45PM',
      isActive: true
    },
    {
      label: 'Fulfilment Available',
      iconClass: 'fa-coffee',
      description: '04/23/2024 - 02:45PM',
      isActive: false
    },
    {
      label: 'Fulfilment Available',
      iconClass: 'fa-coffee',
      description: '04/23/2024 - 02:45PM',
      isActive: false
    }
  ]

  modelList = [
    {
      label: 'Quantity',
      value: '10'
    },
    {
      label: 'Unit Of Measure',
      value: 'cases'
    },
    {
      label: 'Minimum Date Of Expiration',
      value: '10'
    },
    {
      label: 'Inventory Class',
      value: 'Regular'
    },
    {
      label: 'Inventory Status',
      value: 'Available'
    },
    {
      label: 'Unit Of Measure',
      value: 'cases'
    },
    {
      label: 'Minimum Date Of Expiration',
      value: '10'
    },
    {
      label: 'Inventory Class',
      value: 'Regular'
    },
    {
      label: 'Inventory Status',
      value: 'Available'
    },
    {
      label: 'Unit Of Measure',
      value: 'cases'
    },
    {
      label: 'Minimum Date Of Expiration',
      value: '10'
    },
    {
      label: 'Inventory Class',
      value: 'Regular'
    },
    {
      label: 'Inventory Status',
      value: 'Available'
    },
  ]


}
