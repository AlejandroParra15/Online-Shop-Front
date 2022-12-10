import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ModalService } from './modal.service';

import swal from 'sweetalert2';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'detalle-cliente',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() cliente: Cliente;

  titulo: string = "Detalle del cliente";
  progreso: number = 0;

  constructor(private clienteService: ClienteService,
    public modalService: ModalService) { }

  ngOnInit() { }

  cerrarModal() {
    this.modalService.cerrarModal();
    this.progreso = 0;
  }

}
