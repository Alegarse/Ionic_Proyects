import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-ej4',
  templateUrl: './ej4.page.html',
  styleUrls: ['./ej4.page.scss'],
})
export class Ej4Page implements OnInit {

  cart: any = [];
  total: number = 0;

  // User input to cart
  item: string = "";
  price: number = 0;
  quantity: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit()
  {
    this.getItems();
  }

  getItems()
  {
    this.cartService.getJSON().subscribe(
      data => {
        this.cart = data;

        this.cart.forEach(element => 
          this.total += element.price * element.quantity
        );
      }
    );
  }
  
  addItem(item: string, price: number, quantity: number)
  {
    if (item != "" && quantity != 0)
    {
      let itemToSave = {
        item: item,
        price: price,
        quantity: quantity
      };

      
      this.cart.push(itemToSave);
      this.total += itemToSave.price * itemToSave.quantity;

    } else
    {
      console.log("Por favor rellene los campos");
    }
  }

}
