import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface registerResponse {
  success: boolean;
}

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private loggedInStatus = false;

  constructor(private http: HttpClient) {}
  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }

  getUserDetails(username, password) {
    ///post these details to API server return user info if correct
    return this.http.post<any>("/api/auth.php", {
      username,
      password,
    });
  }

  registerUser(username, password) {
    return this.http.post<registerResponse>("/api/register", {
      username,
      password,
    });
  }
}
