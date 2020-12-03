import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { send } from "process";
import { AuthService } from "./auth.service";
import { RequestService } from "./request.service";
//this looks broken but the dockerfile can access the library through this routing
import { logging } from "../../../log-library/logging-library";

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
    //log data below
    let time = Date();
    let sendingService = "schedule.service";
    let routeName = "/api/addschedule";
    let resID = "not yet assigned";
    let reqID = this.reqService.createRequestID();
    let outcome = "not yet assigned";

    console.log("Token found in browser for shipment schedule: ", token);

    if (token != "") {
      return this.http.post<any>("/api/addschedule", {
        scheduleDate,
        userEmail,
        token,
        //log data below
        time,
        sendingService,
        routeName,
        resID,
        reqID,
        outcome,
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
