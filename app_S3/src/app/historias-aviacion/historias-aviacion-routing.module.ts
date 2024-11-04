import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoriasAviacionPage } from './historias-aviacion.page';

const routes: Routes = [
  {
    path: '',
    component: HistoriasAviacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoriasAviacionPageRoutingModule {}
