import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Operacion } from '../models/operacion';
import { faMagnifyingGlass, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { OperacionService } from '../service/operacion.service';
import { OperacionImpl } from '../models/operacion-impl';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent implements OnInit {

  faMagnifyingGlass = faMagnifyingGlass;
  faPencil = faPencil;
  faTrashCan = faTrashCan;

  operacion: Operacion = new OperacionImpl ();
  operaciones: Operacion[] = [];
  router: any;

  constructor(private operacionService: OperacionService) { }

  ngOnInit(): void {
      this.onDataTable();
  }

  onDataTable() {
    this.operacionService.getOperaciones().subscribe((response) => this.operaciones =
    this.operacionService.extraerOperaciones(response));
  }

  onOperacionEliminar(operacion: Operacion){
    this.operacionService.deleteOperacion(operacion.operacionId).subscribe(response => {
      this.router.navigate(['operaciones']);
      this.operaciones = this.operaciones.filter(m => operacion !== m)
      location.reload;
    });
  }

}
