import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestedPartnersComponent } from './interested-partners.component';

describe('InterestedPartnersComponent', () => {
  let component: InterestedPartnersComponent;
  let fixture: ComponentFixture<InterestedPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestedPartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestedPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
