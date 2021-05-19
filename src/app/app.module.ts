import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UnpatchEventsModule} from "@rx-angular/template";
import { NgZoneEventCoalescingComponent } from './ng-zone-event-coalescing/ng-zone-event-coalescing.component';
import {CustomEventCoalescingChildComponent} from "./custom-event-coalescing/custom-event-coalescing-child.component";
import {CustomEventCoalescingComponent} from "./custom-event-coalescing/custom-event-coalescing.component";

@NgModule({
  declarations: [
    AppComponent,
    NgZoneEventCoalescingComponent,
    CustomEventCoalescingComponent,
    CustomEventCoalescingChildComponent
  ],
  imports: [
    BrowserModule,
    UnpatchEventsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
