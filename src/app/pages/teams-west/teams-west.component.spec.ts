import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsWestComponent } from './teams-west.component';

describe('TeamsWestComponent', () => {
  let component: TeamsWestComponent;
  let fixture: ComponentFixture<TeamsWestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamsWestComponent]
    });
    fixture = TestBed.createComponent(TeamsWestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
