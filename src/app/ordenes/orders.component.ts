import { Component, OnInit } from '@angular/core';
import { Orden } from './modelo/orden';
import { ClienteService } from '../clientes/cliente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {

  titulo: string = 'Nueva Factura';
  orden: Orden = new Orden();

  constructor(private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let clienteId = +params.get('clienteId');
      this.clienteService.getCliente(clienteId).subscribe(cliente => this.orden.user = cliente);
    });
  }


}
