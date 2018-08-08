import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  basePath = null;
  constructor(private http: HttpClient) {
    this.basePath = environment.serverUrl;
  }

  get(url, params = {}): Observable<any> {
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.get(this.basePath + url, {headers: headers, params: params});
  }
}
