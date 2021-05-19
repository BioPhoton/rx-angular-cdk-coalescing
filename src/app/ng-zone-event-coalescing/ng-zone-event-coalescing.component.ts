import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-zone-event-coalescing',
  template: `
    {{renders()}}

    <h2>Click Event Bubbling</h2>
    <div (click)="log()">
      <input (click)="log()">
    </div>

    <h2>Click and MouseDown Event</h2>
   <div (click)="log()">
        <input (mousedown)="log()">
   </div>

    <h2>Click and MouseDown Event 2</h2>
   <div>
        <input (click)="log()" (mousedown)="log()">
   </div>
  `
})
export class NgZoneEventCoalescingComponent {

  constructor() { }

  log(): void {
    console.log('log');
  }

  _renders = 0;
  renders(): number {
    return ++this._renders;
  }



}
