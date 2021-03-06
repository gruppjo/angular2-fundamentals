import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'; // all operators
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {
  headers: Headers = new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  })
  apiUrl: string = 'http://localhost:3500';

  constructor(private http: Http) {

  }

  private getJson(response: Response) {
    return response.json();
  }

  private checkForError(response: Response): Response {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    else {
      let error = new Error(response.statusText);
      error['response'] = response;
      console.error(error);
      throw error;
    }

  }

  get(path: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${path}`, { headers: this.headers })
    .map(this.checkForError)
    .catch(err => Observable.throw(err))
    .map(this.getJson);
  }

  post(path: string, body): Observable<any> {
    return this.http.post(
      `${this.apiUrl}${path}`,
      JSON.stringify(body),
      { headers: this.headers }
    )
    .map(this.checkForError)
    .catch(err => Observable.throw(err))
    .map(this.getJson);
  }

  delete(path: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}${path}`, { headers: this.headers })
    .map(this.checkForError)
    .catch(err => Observable.throw(err))
    .map(this.getJson);
  }
}
