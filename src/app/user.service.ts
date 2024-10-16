import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API = "http://localhost:8080"; // Assuming this is your API base URL.

  constructor(private http: HttpClient) { }

  public registerUser(userData: any) {
    return this.http.post(`${this.API}/user`, userData);
  }

  public getUsers() {
    return this.http.get(`${this.API}/user`);
  }

  public deleteUser(userId: any) {
    return this.http.delete(`${this.API}/user/${userId}`);
  }

  public updateUser(user: any) {
    return this.http.put(`${this.API}/user/${user.id}`, user);
  }
}
