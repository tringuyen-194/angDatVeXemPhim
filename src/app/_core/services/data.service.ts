import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { environment } from "../../../environments/environment";
import { tap, catchError } from "rxjs/operators";
let urlApi = "";
@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {
    urlApi = environment.urlApi;
  }
  get(uri: string): Observable<any> {
    return this.http.get(urlApi + "/" + uri).pipe(
      tap((data: any) => {
        //Loading
      }),
      catchError(err => {
        return this.handleErr(err);
      })
    );
  }
  
  handleErr(err) {
    switch (err.status) {
      case 500:
        alert(err.error);
        break;

      default:
        break;
    }
    return throwError(err);
  }
}
