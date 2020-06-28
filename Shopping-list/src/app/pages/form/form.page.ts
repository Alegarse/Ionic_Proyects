import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';
import { ItemService } from 'src/app/services/item.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  pageTitle: string = "Nuevo elemento";
  item: Item = {name: '', quantity: 1, imageUrl: ''}
  action: string = "Añadir elemento"
  id: string;

  constructor(
    private itemService: ItemService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id != null){
      this.itemService.getItemById(this.id).subscribe(
        data => {
          this.item = data;
          this.pageTitle = "Editar elemento";
          this.action = "Actualizar elemento"
        }
      )
    }
  }

  
  addItem() {

    if ( this.action == "Guardar"){
      this.itemService.addItem(this.item);
    } else {
      this.itemService.updateItemById(this.id, this.item)
    }
    this.router.navigateByUrl('/list')
  }
}