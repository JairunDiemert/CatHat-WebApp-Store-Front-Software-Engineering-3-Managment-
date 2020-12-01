import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { RequestService } from "./request.service";

interface myData {
  email: string;
  total: string;
  status: boolean;
}

interface userCart {
  cart: [];
  total: number;
  success: boolean;
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
  constructor(
    private auth: AuthService,
    private http: HttpClient,
    private reqService: RequestService
  ) {}

  getData() {
    return this.http.get<myData>("/api/data");
  }

  getCart(email) {
    let cookieName = "authToken";
    let token: String = this.auth.getCookie(cookieName);

    return this.http.get<userCart>("/api/cart/" + email + "/" + token);
  }

  addCartItem = (itemID, email) => {
    let cookieName = "authToken";
    let token = this.auth.getCookie(cookieName);

    return this.http.post<any>("/api/cart/" + email + "/" + token, {
      itemID,
    });
  };

  deleteCartItem = (itemID, email) => {
    let cookieName = "authToken";
    let token = this.auth.getCookie(cookieName);

    return this.http.post<any>("/api/cart/delete/" + email + "/" + token, {
      itemID,
    });
  };

  updateUser = (oldEmail, username, name, email, address, password) => {
    let cookieName = "authToken";
    let token = this.auth.getCookie(cookieName);

    return this.http.post<totalStatus>("/api/user/:email", {
      oldEmail,
      username,
      name,
      email,
      address,
      password,
      token,
    });
  };

  updateTotal(value) {
    return this.http.post<totalStatus>("/api/total", {
      value,
    });
  }

  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>("/api/isloggedin");
  }

  logout() {
    localStorage.setItem("loggedIn", "false");
    return this.http.get<logoutStatus>("/api/logout");
  }
}
