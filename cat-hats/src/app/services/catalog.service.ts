import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { AuthService } from "./auth.service";

interface catalogResponse {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: "root",
})
export class CatalogService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  getCatalog() {
    return this.http.get<any>("/api/catalog");
  }

  getItem(item) {
    return this.http.get<any>("/api/item/" + item);
  }

  searchItem(item) {
    return this.http.get<any>("/api/search/" + item);
  }

  updateItemQuantity(id) {
    return this.http.post<any>("/api/itemQuanity/", {
      id,
    });
  }
}
