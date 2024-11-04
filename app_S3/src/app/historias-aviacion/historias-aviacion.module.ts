import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoriasAviacionPageRoutingModule } from './historias-aviacion-routing.module';

import { HistoriasAviacionPage } from './historias-aviacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoriasAviacionPageRoutingModule
  ],
  declarations: [HistoriasAviacionPage]
})
export class HistoriasAviacionPageModule {}
