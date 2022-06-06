import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Operacion } from '../models/operacion';
import { OperacionImpl } from '../models/operacion-impl';
import { faMagnifyingGlass, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { OperacionService } from '../service/operacion.service';


@Component({
  selector: 'app-operacion-item',
  templateUrl: './operacion-item.component.html',
  styleUrls: ['./operacion-item.component.css']
})
export class OperacionItemComponent implements OnInit {

  faMagnifyingGlass = faMagnifyingGlass;
  faPencil = faPencil;
  faTrashCan = faTrashCan;

  @Input() operacion: Operacion = new OperacionImpl();
  @Output() operacionEliminar = new EventEmitter<OperacionImpl>();
  @Output() operacionEditar = new EventEmitter<OperacionImpl>();

  constructor() { }

  ngOnInit(): void {
  }

  eliminar(): void{
    if (confirm(`¿Está seguro de que desea eliminar la operación ${this.operacion.nombre} ?`)){
      this.operacionEliminar.emit(this.operacion);
    }
  }

  editar(): void{
    this.operacionEditar.emit(this.operacion);
  }

}
