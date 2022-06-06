import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Operacion } from '../models/operacion';
import { OperacionImpl } from '../models/operacion-impl';
import { OperacionService } from '../service/operacion.service';

@Component({
  selector: 'app-operacion-form-editar',
  templateUrl: './operacion-form-editar.component.html',
  styleUrls: ['./operacion-form-editar.component.css']
})
export class OperacionFormEditarComponent implements OnInit {

  operacion: Operacion = new OperacionImpl();

  constructor(private operacionService: OperacionService, 
              private router: Router) { }

  ngOnInit(): void {
  }

  onEditarOperacion(): void {
    this.operacionService.updateOperacion(this.operacion).subscribe(); 
    this.router.navigate(['/operaciones']);
  }

}
