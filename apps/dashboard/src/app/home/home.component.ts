import { Component } from '@angular/core';
import { IWidget } from '@fem/api-interfaces';

const mockWidgets: IWidget[] = [
  { id: '1', title: 'Widget 01', description: 'Pending' },
  { id: '2', title: 'Widget 02', description: 'Pending' },
  { id: '3', title: 'Widget 03', description: 'Pending' },
];

@Component({
  selector: 'fem-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  widgets: IWidget[] = mockWidgets;
}
