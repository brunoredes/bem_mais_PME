import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewArgumentsComponent } from './form-new-arguments.component';

describe('FormNewArgumentsComponent', () => {
  let component: FormNewArgumentsComponent;
  let fixture: ComponentFixture<FormNewArgumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNewArgumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNewArgumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
