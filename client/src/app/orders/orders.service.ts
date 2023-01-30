import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrder } from '../shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  baseUrl = "https://localhost:5001/api/";
  

  constructor(private http: HttpClient) { }

  getOrders()
  {

    return this.http.get<IOrder[]>(this.baseUrl + 'orders');
  }
  getOrder(orderID:number)
  {

    return this.http.get<IOrder>(this.baseUrl + 'orders/' + orderID);
  }
}
