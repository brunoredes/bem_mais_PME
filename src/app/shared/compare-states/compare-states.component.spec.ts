import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareStatesComponent } from './compare-states.component';

describe('CompareStatesComponent', () => {
  let component: CompareStatesComponent;
  let fixture: ComponentFixture<CompareStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
