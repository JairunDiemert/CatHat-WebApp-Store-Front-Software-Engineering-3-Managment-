import { Component, OnInit } from "@angular/core";
import { ScheduleService } from "src/app/schedule.service";

@Component({
  selector: "app-history-page",
  templateUrl: "./history-page.component.html",
  styleUrls: ["./history-page.component.css"],
})
export class HistoryPageComponent implements OnInit {
  public historyList = [];
  constructor(private schedule: ScheduleService) {}

  ngOnInit(): void {
    this.displayHistory();
  }

  displayHistory() {
    this.schedule.getSchedule().subscribe((data) => {
      if (data.success) {
        this.historyList = data.schedule;
      } else {
        window.alert(
          "No history to diplay. You may not have any history, or you may not be logged in."
        );
      }
    });
  }
}
