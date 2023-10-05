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
  userinfo01 = '';

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

  logout() {
    window.location.href = '/logout';
  }

  userinfo() {
    this.httpClient.get('/me', { responseType: 'text' }).subscribe({
      next: (response) => (this.userinfo01 = response),
      error: (error) => (this.userinfo01 = 'Error'),
      complete: () => console.info('complete'),
    });
  }

  users_data() {
    window.open('/resource3/users', '_blank');
  }

  client_data() {
    window.open('/resource3/clients', '_blank');
  }

  session_data() {
    window.open('/resource3/sessions', '_blank');
  }

  authorization_data() {
    window.open('/resource3/authorization', '_blank');
  }

  authorizationconsent_data() {
    window.open('/resource3/authorizationconsent', '_blank');
  }

  jwks_data() {
    window.open('http://localhost:9000/oauth2/jwks', '_blank');
  }

  info_data() {
    window.open(
      'http://localhost:9000/.well-known/oauth-authorization-server',
      '_blank'
    );
  }

  oidc_info_data() {
    window.open(
      'http://localhost:9000/.well-known/openid-configuration',
      '_blank'
    );
  }

  new_jwks() {
    window.open('http://localhost:9000/oauth2/new_jwks', '_blank');
  }
}
