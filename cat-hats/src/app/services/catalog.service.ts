import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { AuthService } from "./auth.service";
import { RequestService } from "./request.service";

let logging = require("../../../log-library/logging-library");
const sendingService = "catalog.service.ts";

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
    const reqID = this.reqService.createRequestID();

    logging.createLog(
      sendingService,
      "/api/catalog/reqID",
      reqID,
      "N/A",
      sendingService + " getCatalog()" + " Called"
    );

    return this.http.get<any>("/api/catalog/" + reqID);
  }

  getItem(item) {
    const reqID = this.reqService.createRequestID();

    logging.createLog(
      sendingService,
      "/api/item/item/reqID",
      reqID,
      "N/A",
      sendingService + " getItem()" + " Called"
    );

    return this.http.get<any>("/api/item/" + item + "/" + reqID);
  }

  searchItem(item) {
    const reqID = this.reqService.createRequestID();

    logging.createLog(
      sendingService,
      "/api/search/item/reqID",
      reqID,
      "N/A",
      sendingService + " searchItem()" + " Called"
    );

    return this.http.get<any>("/api/search/" + item + "/" + reqID);
  }

  updateItemQuantity(id) {
    const reqID = this.reqService.createRequestID();

    logging.createLog(
      sendingService,
      "/api/itemQuantity/[id, reqID]",
      reqID,
      "N/A",
      sendingService + " updateItemQuantity()" + " Called"
    );

    return this.http.post<any>("/api/itemQuantity/", {
      id,
      reqID,
    });
  }
}
