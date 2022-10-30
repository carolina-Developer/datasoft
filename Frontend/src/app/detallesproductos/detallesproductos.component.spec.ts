import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesproductosComponent } from './detallesProductos.component';

describe('DetallesproductosComponent', () => {
  let component: DetallesproductosComponent;
  let fixture: ComponentFixture<DetallesproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesproductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
