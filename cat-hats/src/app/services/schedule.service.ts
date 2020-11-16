import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class ScheduleService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  addSchedule(scheduleDate, userEmail) {
    let cookieName = "authToken";
    let token = this.auth.getCookie(cookieName).toString();

    console.log("Token found in browser for shipment schedule: ", token);

    if (token != "") {
      return this.http.post<any>("/api/addschedule", {
        scheduleDate,
        userEmail,
        token,
      });
    } else {
      console.log("User token not authenticated in schedule.service.ts");
    }
  }

  getSchedule() {
    let cookieName = "authToken";
    let token: String = this.auth.getCookie(cookieName);

    return this.http.get<any>("/api/getschedule/" + token);
  }
}
