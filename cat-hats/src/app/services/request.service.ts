import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RequestService {
  constructor() {}

  createRequestID() {
    let userEmail = localStorage.getItem("email");
    let date = new Date().getTime();
    return userEmail + date;
  }
}
