import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MailService {

  constructor(private http: HttpClient) { }

  send(datos: any) {
  	return this.http.post("http://localhost:3000/send-email", datos);
  }
}
