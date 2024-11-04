import { Component } from '@angular/core';

@Component({
  selector: 'app-historias-aviacion',
  templateUrl: './historias-aviacion.page.html',
  styleUrls: ['./historias-aviacion.page.scss'],
})
export class HistoriasAviacionPage {
  historias = [
    {
      titulo: 'El Espíritu de San Luis',
      descripcion: 'La historia del vuelo transatlántico de Charles Lindbergh en 1927, que marcó un hito en la aviación al ser el primer vuelo sin escalas desde Nueva York hasta París.'
    },
    {
      titulo: 'El Primer Vuelo de los Hermanos Wright',
      descripcion: 'En 1903, los hermanos Wright lograron el primer vuelo controlado, sostenido y motorizado en Kitty Hawk, Carolina del Norte.'
    },
    {
      titulo: 'El Vuelo de Amelia Earhart',
      descripcion: 'Amelia Earhart se convirtió en la primera mujer en volar sola sobre el Atlántico en 1932, y su misteriosa desaparición aún intriga al mundo.'
    }
  ];
}
