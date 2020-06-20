import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinistradosComponent } from './sinistrados.component';

describe('SinistradosComponent', () => {
  let component: SinistradosComponent;
  let fixture: ComponentFixture<SinistradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinistradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinistradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
