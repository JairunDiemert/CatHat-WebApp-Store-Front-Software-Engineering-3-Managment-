import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { RequestService } from "./request.service";

let logging = require("../../../log-library/logging-library");
const sendingService = "user.service.ts";

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

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(
    private auth: AuthService,
    private http: HttpClient,
    private reqService: RequestService
  ) {}

  getCart(email) {
    let cookieName = "authToken";
    let token: String = this.auth.getCookie(cookieName);
    const reqID = this.reqService.createRequestID();

    logging.createLog(
      sendingService,
      "/api/cart/email/token/reqID",
      reqID,
      "N/A",
      sendingService + " getCart()" + " Called"
    );

    return this.http.get<userCart>(
      "/api/cart/" + email + "/" + token + "/" + reqID
    );
  }

  addCartItem = (itemID, email) => {
    let cookieName = "authToken";
    let token = this.auth.getCookie(cookieName);
    const reqID = this.reqService.createRequestID();

    logging.createLog(
      sendingService,
      "/api/cart/email/token/[itemID, reqID]",
      reqID,
      "N/A",
      sendingService + " addCartItem()" + " Called"
    );

    return this.http.post<any>("/api/cart/" + email + "/" + token, {
      itemID,
      reqID,
    });
  };

  deleteCartItem = (itemID, email) => {
    let cookieName = "authToken";
    let token = this.auth.getCookie(cookieName);
    const reqID = this.reqService.createRequestID();

    logging.createLog(
      sendingService,
      "/api/cart/delete/email/token/[itemID, reqID]",
      reqID,
      "N/A",
      sendingService + " deleteCartItem()" + " Called"
    );

    return this.http.post<any>("/api/cart/delete/" + email + "/" + token, {
      itemID,
      reqID,
    });
  };

  updateUser = (oldEmail, username, name, email, address, password) => {
    let cookieName = "authToken";
    let token = this.auth.getCookie(cookieName);
    const reqID = this.reqService.createRequestID();

    logging.createLog(
      sendingService,
      "/api/user/email/[oldEmail, username, name, email, address, password, token, reqID]",
      reqID,
      "N/A",
      sendingService + " updateUser()" + " Called"
    );

    return this.http.post<any>("/api/user/:email", {
      oldEmail,
      username,
      name,
      email,
      address,
      password,
      token,
      reqID,
    });
  };

  isLoggedIn(): Observable<isLoggedIn> {
    const reqID = this.reqService.createRequestID();

    logging.createLog(
      sendingService,
      "/api/isloggedin/reqID",
      reqID,
      "N/A",
      sendingService + " isLoggedIn()" + " Called"
    );

    return this.http.get<isLoggedIn>("/api/isloggedin/" + reqID);
  }

  logout() {
    localStorage.setItem("loggedIn", "false");
    const reqID = this.reqService.createRequestID();

    logging.createLog(
      sendingService,
      "/api/logout/reqID",
      reqID,
      "N/A",
      sendingService + " logout()" + " Called"
    );

    return this.http.get<logoutStatus>("/api/logout/" + reqID);
  }
}
