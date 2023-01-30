import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasketTotals } from '../../models/basket';
import { IOrder } from '../../models/order';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.scss']
})
export class OrderTotalsComponent implements OnInit {
  basketTotals$: Observable<IBasketTotals>;
  @Input() order: IOrder;
  
  constructor(private basketService: BasketService) { }

  ngOnInit() {
   
    this.basketTotals$ = this.basketService.basketTotal$;
  }

  

}
