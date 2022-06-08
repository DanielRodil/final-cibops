import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Operacion } from '../../models/operacion';
import { OperacionImpl } from '../../models/operacion-impl';
import { OperacionService } from '../../service/operacion.service';


@Component({
  selector: 'app-operacioneditar',
  templateUrl: './operacioneditar.component.html',
  styleUrls: ['./operacioneditar.component.css']
})
export class OperacioneditarComponent implements OnInit {

  operacion$: Observable<any> = new Observable<any>();

  @Input() operacion: Operacion = new OperacionImpl();

  constructor(private operacionService: OperacionService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.operacion$ = this.cargarOperacion();
  }

  onEditarOperacion(): void {
    this.operacionService.updateOperacion(this.operacion).subscribe(); 
    this.router.navigate(['/operaciones']);
  }

  cargarOperacion(): any {
    return this.operacionService.getOperacion(this.activatedRoute.snapshot.params['id']);
  }

}