import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class AppSignupService {
  _url = 'http://localhost:3000';

  constructor(private _http: HttpClient) {
  }

  getAppSignupService(data): Observable<any> {
    let value = JSON.stringify(data);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
       //  'Authorization': 'my-auth-token'
      })
    };

    return this._http.post(this._url, value, httpOptions);
  }

  getcountry(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //  'Authorization': 'my-auth-token'
      })
    };

    return this._http.get(this._url,  httpOptions);
  }
}
