import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { AuthService } from "./auth.service";
import { RequestService } from "./request.service";
//this looks broken but the dockerfile can access the library through this routing
import { logging } from "../../../log-library/logging-library";

interface catalogResponse {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: "root",
})
export class CatalogService {
  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private reqService: RequestService
  ) {}

  getCatalog() {
    let reqID = this.reqService.createRequestID();
    return this.http.get<any>("/api/catalog/" + reqID);
  }

  getItem(item) {
    let reqID = this.reqService.createRequestID();
    return this.http.get<any>("/api/item/" + item + "/" + reqID);
  }

  searchItem(item) {
    let reqID = this.reqService.createRequestID();
    return this.http.get<any>("/api/search/" + item + "/" + reqID);
  }

  updateItemQuantity(id) {
    let reqID = this.reqService.createRequestID();
    return this.http.post<any>("/api/itemQuanity/", {
      id,
      reqID,
    });
  }
}
