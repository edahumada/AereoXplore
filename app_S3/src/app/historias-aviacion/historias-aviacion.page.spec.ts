import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoriasAviacionPage } from './historias-aviacion.page';

describe('HistoriasAviacionPage', () => {
  let component: HistoriasAviacionPage;
  let fixture: ComponentFixture<HistoriasAviacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriasAviacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
