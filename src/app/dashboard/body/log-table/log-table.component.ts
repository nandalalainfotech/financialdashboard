import { Component, OnInit } from '@angular/core';

export interface ILog {
  key: number;
  label: string;
  time: string;
  color: string;
}

@Component({
  selector: 'app-log-table',
  templateUrl: './log-table.component.html',
  styleUrls: ['./log-table.component.css']
})
export class LogTableComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  data: ILog[] = [
    {
      label: 'MM/ML',
      time: '12,000-30%',
      color: 'red',
      key: 0
    },
    {
      label: 'Lookalike Shopify',
      time: '12,000.30%',
      color: 'border-theme-2',
      key: 1
    },
    {
      label: 'SM',
      time: '6,000 - 15%',
      color: 'border-danger',
      key: 2
    },
    {
      label: 'OCE',
      time: '',
      color: 'border-theme-2',
      key: 3
    },
    {
      label: 'LLA stub',
      time: '',
      color: 'border-theme-2',
      key: 4
    },
    {
      label: 'Their Customers',
      time: '',
      color: 'border-theme-2',
      key: 5
    },
    {
      label: 'PP',
      time: '',
      color: 'border-danger',
      key: 6
    },
  ];



}


