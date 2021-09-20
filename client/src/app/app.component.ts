
import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Skinet';
  constructor(private basketService:BasketService) {}

  ngOnInit(){
    const baskedId = localStorage.getItem('basket_id');
    console.log(baskedId);
    if(baskedId)
    {
      this.basketService.getBasket(baskedId).subscribe(() => {
        console.log('Initialized basket');
      }, error => {
        console.log(error);
      });
    }
  }
}
