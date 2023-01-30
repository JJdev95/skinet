import { Component, OnInit } from '@angular/core';
import { IOrder } from '../shared/models/order';
import { OrdersService } from './orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private ordersService: OrdersService) { }

  orders: IOrder[] = [];

  ngOnInit(): void {
    console.log("init");
    this.ordersService.getOrders().subscribe((response: IOrder[]) => {
      
      this.orders = response;
      console.log(this.orders);
    })
  }

}
