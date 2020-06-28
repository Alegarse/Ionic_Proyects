import { Component, OnInit } from '@angular/core';

// Importo el JSON con datos
import cart from 'src/assets/json/cart.json';

@Component({
  selector: 'app-ej3',
  templateUrl: './ej3.page.html',
  styleUrls: ['./ej3.page.scss'],
})
export class Ej3Page implements OnInit {

// Exporto los datos de los archivos JSON a la  vista
Carta: any = cart;
  
//Defino las variables que intervienen
total: number = 0;

constructor() {}

ngOnInit() {
  this.Carta.forEach(cart => {
    this.total += (cart.price * cart.quantity);
  });
}

}
