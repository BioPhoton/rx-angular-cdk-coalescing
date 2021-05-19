import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-custom-event-coalescing-child',
  template: `
    {{renders()}}

    <h2>Click and MouseDown Event 2</h2>
   <div>
        <input (click)="log.next()" (mousedown)="log()">
   </div>
  `
})
export class CustomEventCoalescingChildComponent implements OnDestroy {
  log = new Subject();

  constructor() {
    this.log.pipe(

    )
  }

  _renders = 0;
  renders(): number {
    return ++this._renders;
  }



}
