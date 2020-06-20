import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesArgumentsComponent } from './sales-arguments.component';

describe('SalesArgumentsComponent', () => {
  let component: SalesArgumentsComponent;
  let fixture: ComponentFixture<SalesArgumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesArgumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesArgumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
