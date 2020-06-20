import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparativeSalesComponent } from './comparative-sales.component';

describe('ComparativeSalesComponent', () => {
  let component: ComparativeSalesComponent;
  let fixture: ComponentFixture<ComparativeSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparativeSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparativeSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
