import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionsGoalsComponent } from './suggestions-goals.component';

describe('SuggestionsGoalsComponent', () => {
  let component: SuggestionsGoalsComponent;
  let fixture: ComponentFixture<SuggestionsGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestionsGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionsGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
