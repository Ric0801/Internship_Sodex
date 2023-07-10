import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsOverviewComponent } from './teams-overview.component';

describe('TeamsOverviewComponent', () => {
  let component: TeamsOverviewComponent;
  let fixture: ComponentFixture<TeamsOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamsOverviewComponent]
    });
    fixture = TestBed.createComponent(TeamsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
