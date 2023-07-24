import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerComponentsComponent } from './player-components.component';

describe('PlayerComponentsComponent', () => {
  let component: PlayerComponentsComponent;
  let fixture: ComponentFixture<PlayerComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerComponentsComponent]
    });
    fixture = TestBed.createComponent(PlayerComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
