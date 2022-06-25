import { Component, EventEmitter, Input, Output} from '@angular/core';
import { IWidget } from '@fem/api-interfaces';

@Component({
  selector: 'fem-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.scss'],
})
export class WidgetsListComponent {
  @Input() widgets: IWidget[] = [];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
