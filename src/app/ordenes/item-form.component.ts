import { Component, OnInit } from '@angular/core';
import { Item } from './modelo/item';
import { ItemService } from './item.service';
import {Router, ActivatedRoute} from '@angular/router'
import swal from 'sweetalert2'


@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html'
})
export class ItemFormComponent implements OnInit {

  public item : Item = new Item();
  public titulo:string = "Añadir Libro"

  constructor(private itemService : ItemService,private router: Router,
    private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
      this.cargarCliente()
    }
  
    cargarCliente(): void{
      this.activatedRoute.params.subscribe(params => {
        let id = params['id']
        if(id){
          this.itemService.getItem(id).subscribe( (item) => this.item = item)
        }
      })
    }
  
    create(): void {
      this.itemService.create(this.item)
        .subscribe(item => {
          this.router.navigate(['/shop/books/list'])
          swal('Nuevo Libro', `Libro ${this.item.name} creado con éxito!`, 'success')
        }
        );
    }
  
    update():void{
      this.itemService.update(this.item)
      .subscribe( item => {
        this.router.navigate(['/shop/books/list'])
        swal('Libro Actualizado', `Libro ${this.item.name} actualizado con éxito!`, 'success')
      }
  
      )
    }

}
