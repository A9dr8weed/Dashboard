import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SalesDataService {

  constructor(private _http: HttpClient) { }

  getOrders(pageIndex: number, pageSize: number) {
    return this._http.get('https://localhost:5001/api/order/' + pageIndex + '/' + pageSize);
  }

  getOrdersByCustomer(n: number) {
    return this._http.get('https://localhost:5001/api/order/bycustomer/' + n);
  }

  getOrdersByState() {
    return this._http.get('https://localhost:5001/api/order/bystate/');
  }
}
