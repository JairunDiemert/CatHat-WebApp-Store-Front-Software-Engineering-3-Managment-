import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { send } from "process";
import { AuthService } from "./auth.service";
import { RequestService } from "./request.service";

let logging = require("../../../log-library/logging-library");
const sendingService = "schedule.service.ts";
@Injectable({
  providedIn: "root",
})
export class ScheduleService {
  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private reqService: RequestService
  ) {}

  addSchedule(scheduleDate, userEmail) {
    let cookieName = "authToken";
    let token = this.auth.getCookie(cookieName).toString();
    let reqID = this.reqService.createRequestID();

    console.log("Token found in browser for shipment schedule: ", token);
    logging.createLog(
      sendingService,
      "/api/addschedule",
      reqID,
      "N/A",
      sendingService + " addSchedule()" + " Called"
    );

    if (token != "") {
      return this.http.post<any>("/api/addschedule", {
        scheduleDate,
        userEmail,
        token,
        reqID,
      });
    } else {
      console.log("User token not authenticated in schedule.service.ts");
    }
  }

  getSchedule() {
    let cookieName = "authToken";
    let token: String = this.auth.getCookie(cookieName);
    let reqID = this.reqService.createRequestID();

    return this.http.get<any>("/api/getschedule/" + token + "/" + reqID);
  }
}
