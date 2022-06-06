import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperacionFormEditarComponent } from './operacion-form-editar/operacion-form-editar.component';
import { OperacionFormComponent } from './operacion-form/operacion-form.component';
import { OperacionesComponent } from './operaciones/operaciones.component';

const routes: Routes = [
  {
    path: '',
    component: OperacionesComponent
  },
  {
    path: 'formularioOperacion',
    component: OperacionFormComponent
  },
  {
    path: 'formularioOperacion/:id',
    component: OperacionFormEditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperacionesRoutingModule { }
