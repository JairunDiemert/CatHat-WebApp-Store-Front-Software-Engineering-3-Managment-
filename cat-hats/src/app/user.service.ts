import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

interface myData {
  email: string;
  total: string;
  status: boolean;
}

interface isLoggedIn {
  status: boolean;
}

interface logoutStatus {
  success: boolean;
}

interface totalStatus {
  success: boolean;
}

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<myData>("/api/data");
  }

  updateUser(value) {
    return this.http.post<totalStatus>("/api/user/:email", {
      value,
    });
  }
  updateTotal(value) {
    return this.http.post<totalStatus>("/api/total", {
      value,
    });
  }

  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>("/api/isloggedin");
  }

  logout() {
    return this.http.get<logoutStatus>("/api/logout");
  }
}
