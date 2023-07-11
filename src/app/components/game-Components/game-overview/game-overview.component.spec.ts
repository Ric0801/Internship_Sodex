import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesOverview } from './game-overview.component';

describe('TeamComponent', () => {
  let component: GamesOverview;
  let fixture: ComponentFixture<GamesOverview>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamesOverview]
    });
    fixture = TestBed.createComponent(GamesOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
