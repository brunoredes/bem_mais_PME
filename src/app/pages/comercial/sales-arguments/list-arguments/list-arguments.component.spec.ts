import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArgumentsComponent } from './list-arguments.component';

describe('ListArgumentsComponent', () => {
  let component: ListArgumentsComponent;
  let fixture: ComponentFixture<ListArgumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListArgumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListArgumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
