import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTimelineTrackerComponent } from './custom-timeline-tracker.component';

describe('CustomTimelineTrackerComponent', () => {
  let component: CustomTimelineTrackerComponent;
  let fixture: ComponentFixture<CustomTimelineTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTimelineTrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomTimelineTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
