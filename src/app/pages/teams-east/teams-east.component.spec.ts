import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsEastComponent } from './teams-east.component';

describe('TeamsEastComponent', () => {
  let component: TeamsEastComponent;
  let fixture: ComponentFixture<TeamsEastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamsEastComponent]
    });
    fixture = TestBed.createComponent(TeamsEastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
