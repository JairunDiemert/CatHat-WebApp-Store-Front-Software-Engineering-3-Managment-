import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { customerModel } from "./models/customer-model";
import { catchError, tap } from "rxjs/operators";

interface registerResponse {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: "root",
})
export class AuthService {
  loggedInStatus = false;
  constructor(private http: HttpClient) {}

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
    if (value) localStorage.setItem("loggedIn", "true");
    else localStorage.setItem("loggedIn", "false");
  }

  getisLoggedIn() {
    if (localStorage.getItem("loggedIn") == "true") {
      this.loggedInStatus = true;
    } else if (localStorage.getItem("loggedIn") == "false") {
      this.loggedInStatus = false;
    }
    return this.loggedInStatus;
  }

  getUserDetails(email, password) {
    localStorage.setItem("email", email);

    ///post these details to API server return user info if correct
    return this.http.post<any>("/api/login", {
      email,
      password,
    });
  }

  registerUser(username, name, email, address, password) {
    localStorage.setItem("username", username);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("address", address);
    localStorage.setItem("password", password);

    return this.http.post<registerResponse>("/api/register", {
      username,
      name,
      email,
      address,
      password,
    });
  }

  getUser(email) {
    return this.http.get<any>("/api/user/" + email);
  }
}
