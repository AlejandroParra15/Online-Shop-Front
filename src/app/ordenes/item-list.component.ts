import { Component, OnInit } from '@angular/core';
import { Item } from './modelo/item';
import { ItemService } from './item.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html'
})
export class ItemListComponent implements OnInit {

  items: Item[];

  constructor(private itemService : ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(
      items => this.items = items
    );
  }

  
  delete(item: Item): void {
    swal({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar el libro ${item.name}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {

        this.itemService.delete(item.itemId).subscribe(
          response => {
            this.items = this.items.filter(cli => cli !== item)
            swal(
              'Libro Eliminado!',
              `Libro ${item.name} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }

}
