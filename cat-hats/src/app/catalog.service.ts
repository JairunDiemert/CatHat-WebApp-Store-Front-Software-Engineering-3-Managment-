import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";

interface catalogResponse {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) { }

  getCatalog() {
    return this.http.get<any>("/api/catalog");
  }
  
}
