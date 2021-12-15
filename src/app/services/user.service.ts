import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public host: string = 'http://localhost:5000';
  constructor(private httpClient: HttpClient) {}
}
