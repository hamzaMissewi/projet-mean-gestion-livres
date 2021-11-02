import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CrudService {
  public host: string = 'http://localhost:5000';
  constructor(private httpClient: HttpClient) {}
}
