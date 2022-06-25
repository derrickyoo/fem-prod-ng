import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { environment } from '@env/environment';
import { IWidget } from '@fem/api-interfaces';

const API_ENDPOINT = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root',
})
export class WidgetsService {
  model = 'widgets';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<IWidget[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<IWidget>(this.getUrlWithId(id));
  }

  create(widget: IWidget) {
    return this.http.post(this.getUrl(), widget);
  }

  update(widget: IWidget) {
    return this.http.put(this.getUrlWithId(widget.id), widget);
  }

  delete(widget: IWidget) {
    return this.http.delete(this.getUrlWithId(widget.id));
  }

  private getUrl() {
    return `${API_ENDPOINT}${this.model}`;
  }

  private getUrlWithId(id: string | null) {
    return `${this.getUrl()}/${id}`;
  }
}
