import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';
  message = '...';

  constructor(private http: HttpClient) {
    this.http.get('/api/message', {responseType: 'text'}).subscribe(
      (resp: any) => this.message = resp,
      (error: any) => console.error(error)
    );
  }
}
