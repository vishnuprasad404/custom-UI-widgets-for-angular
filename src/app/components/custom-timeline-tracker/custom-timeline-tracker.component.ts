import { Component, Input } from '@angular/core';
import { TimelineList } from './timeline.model';

@Component({
  selector: 'app-custom-timeline-tracker',
  templateUrl: './custom-timeline-tracker.component.html',
  styleUrls: ['./custom-timeline-tracker.component.scss']
})


export class CustomTimelineTrackerComponent {
  @Input() styleClass?: string;
  @Input() reverse?: boolean;
  @Input() horizontalView?: boolean;
  @Input() value?: TimelineList[];

}
