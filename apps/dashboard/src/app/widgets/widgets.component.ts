import { Component, OnInit } from '@angular/core';
import { IWidget } from '@fem/api-interfaces';

const mockWidgets: IWidget[] = [
  { id: '1', title: 'Widget 01', description: 'Pending' },
  { id: '2', title: 'Widget 02', description: 'Pending' },
  { id: '3', title: 'Widget 03', description: 'Pending' },
];

const emptyWidget: IWidget = {
  id: null,
  title: '',
  description: '',
}

@Component({
  selector: 'fem-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {
  widgets: IWidget[] = mockWidgets;
  selectedWidget: IWidget = emptyWidget;

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.loadWidgets();
    this.selectWidget(emptyWidget);
  }

  resetForm() {
    this.selectedWidget = emptyWidget;
  }

  selectWidget(widget: IWidget) {
    this.selectedWidget = widget;
  }

  loadWidgets() {
    this.widgets = mockWidgets;
  }

  saveWidget(widget: IWidget) {
    if(widget.id) {
      this.updateWidget(widget);
    } else {
      this.createWidget(widget);
    }
  }

  createWidget(widget: IWidget) {
    const newWidget = Object.assign({}, widget, { id: this.getRandomID()})
    this.widgets = [...this.widgets, newWidget];
    this.resetForm();
  }

  updateWidget(widget: IWidget) {
    this.widgets = this.widgets.map(w => {
      return (widget.id === w.id) ? widget : w;
    });
    this.resetForm();
  }

  deleteWidget(widget: IWidget) {
    this.widgets = this.widgets.filter(w => widget.id !== w.id);
    this.resetForm();
  }

  private getRandomID() {
    return Math.random().toString(36).substring(7);
  }
}
