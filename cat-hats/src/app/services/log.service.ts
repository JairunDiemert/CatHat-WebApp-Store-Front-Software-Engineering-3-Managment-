import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LogService {
  constructor(private http: HttpClient) {}

  addlog(time, sendingService, routeName, resID, reqID, outcome) {
    return this.http.post<any>("http://localhost:65535/addlog", {
      //log data below
      time,
      sendingService,
      routeName,
      resID,
      reqID,
      outcome,
    });
  }
}
