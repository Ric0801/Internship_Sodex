import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaFrontpageComponent } from './nba-frontpage.component';

describe('NbaFrontpageComponent', () => {
  let component: NbaFrontpageComponent;
  let fixture: ComponentFixture<NbaFrontpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NbaFrontpageComponent]
    });
    fixture = TestBed.createComponent(NbaFrontpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
