import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class userService {
  // public host: string = 'http://localhost:5000';
  private apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {}

  /**
   * Get all users
   * @returns Observable<user[]>
   */
  all() {
    return this.http.get(this.apiUrl);
  }

  /**
   * Get a user with the given id
   * @param id : user id
   * @returns Observable<user>
   */
  get(id: string) {
    return this.http.get(this.apiUrl + '/' + id);
  }

  /**
   * Create a new user
   * @param user new user to create
   */
  create(user: any) {
    return this.http.post(this.apiUrl, user);
  }

  /**
   * Update a user with the given id
   * @param id user id to update
   * @param user new user data
   */
  update(id: string, user: any) {
    return this.http.put(this.apiUrl + '/' + id, user);
  }

  /**
   * Delete a user with the given id
   * @param id user id to delete
   */
  delete(id: string) {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
