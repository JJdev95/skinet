
import { Component, OnInit } from '@angular/core';
import { AccountService } from './account/account.service';
import { BasketService } from './basket/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Skinet';
  constructor(private basketService:BasketService, private accountService: AccountService) {}

  ngOnInit(){
    this.loadBasket();
    this.loadCurrentUser();
  }

  loadCurrentUser()
  {
    const token = localStorage.getItem('token');
    this.accountService.loadCurrentUser(token).subscribe(() => {
        console.log('loaded user');

      }, error => {
        console.log(error);
    })
  }


  loadBasket()
  {
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
