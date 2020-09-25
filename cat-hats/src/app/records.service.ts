import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class RecordsService {
  constructor(private http: HttpClient) {}

  //remove after testing
  getData() {
    return this.http.get<any>("/api/fake-data.php");
  }
}
