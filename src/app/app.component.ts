import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Spring Boot Tutorial!';
  message01 = 'Api has not been called yet';
  message02 = 'Api has not been called yet';

  constructor(private httpClient: HttpClient) {}

  button01() {
    this.httpClient.get('/resource1', { responseType: 'text' }).subscribe({
      next: (response) => (this.message01 = response),
      error: (error) => (this.message01 = 'Error'),
      complete: () => console.info('complete'),
    });
  }

  button02() {
    this.httpClient.get('/resource2', { responseType: 'text' }).subscribe({
      next: (response) => (this.message02 = response),
      error: (error) => (this.message02 = 'Error'),
      complete: () => console.info('complete'),
    });
  }

  login() {
    window.location.href = '/oauth2/authorization/gateway';
  }
}
