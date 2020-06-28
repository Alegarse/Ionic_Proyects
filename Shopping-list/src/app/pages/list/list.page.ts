import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Observable } from 'rxjs';
import { Item } from 'src/app/model/item';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  items: Observable<Item[]>;

  constructor(
    private itemService: ItemService, 
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    // Quitamos esto porque lo que vamos a hacer es que cargue primero los usuarios, y no los items
    // this.items = this.itemService.getItems();

    this.authService.getCurrentUser().subscribe(
      () => this.items = this.itemService.getItems()
    );
  }

  addItem() {
    this.router.navigateByUrl('/create-item')
    
    /*const item = {
      name: 'Phoskitos',
      imageUrl: 'https://www.adamfoods.com/images/product/es/phoskitos/galleta-1.png',
      quantity: 6
    }
    this.itemService.addItem(item);
    */
  }

  goEditItem(id: string) {
    this.router.navigateByUrl('/edit-item/' + id);
  }
}