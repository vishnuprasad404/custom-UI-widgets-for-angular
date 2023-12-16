import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomTimelineTrackerComponent } from './components/custom-timeline-tracker/custom-timeline-tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomTimelineTrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
