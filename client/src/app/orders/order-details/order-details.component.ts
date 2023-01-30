import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from 'src/app/shared/models/order';
import { BreadcrumbService } from 'xng-breadcrumb';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  order:IOrder;

  constructor(private orderService:OrdersService, private activatedRoute: ActivatedRoute, private bcService: BreadcrumbService) {
     
   }

  ngOnInit() {
    this.bcService.set('@pview-order','');
    this.loadProduct();
  }

  loadProduct()
  {
    this.orderService.getOrder(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(order => {
    this.order = order;
    console.log(order);
    this.bcService.set('@view-order', "Order #" + order.userOrderIndex + " " + order.status);
    }, error => {
      console.log(error);
    });
  }

}
