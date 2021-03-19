import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Server } from '../shared/server';
import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private _http: HttpClient) {
  }

  getServers(): Observable<Server[]> {
    return this._http.get<Server[]>('https://localhost:5001/api/server/').catch(this.handleError);
  }

  handleError(error: any) {
    console.log('error!');
    const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';

    console.log(errMsg);

    return Observable.throw(errMsg);
  }
}
