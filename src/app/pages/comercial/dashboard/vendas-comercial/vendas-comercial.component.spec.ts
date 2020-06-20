import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendasComercialComponent } from './vendas-comercial.component';

describe('VendasComercialComponent', () => {
  let component: VendasComercialComponent;
  let fixture: ComponentFixture<VendasComercialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendasComercialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendasComercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
