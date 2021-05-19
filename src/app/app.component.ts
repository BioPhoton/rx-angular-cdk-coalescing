import {Component} from '@angular/core';
import {from, timer, Observable, interval, MonoTypeOperatorFunction} from 'rxjs';
import {coalesceWith} from '@rx-angular/cdk';

// export declare function coalesceWith<T>(durationSelector: Observable<any>, scope?: object): (o: Observable<T>) => Observable<T>;
// export declare function coalesceWith<T>(durationSelector: Observable<any>, scope?: object): MonoTypeOperatorFunction<T>;



function toEmissions(num: string | number): Observable<number> {
  const arr = Array.from(Array(parseInt(num + '', 10)).keys()).map((i: number) => ++i);
  return from(arr);
}

const microTaskDurationSelector = from(Promise.resolve()) as Observable<any>;
const setTimeoutDurationSelector = interval(500) as Observable<any>;

@Component({
  selector: 'app-root',
  template: `
    <input #num name="numExecutions">
    <button [unpatch] (click)="runWork(num.value)">Execute Normal</button>
    <button [unpatch] (click)="runWorkCoalesced(num.value)">Execute with coalescing</button>

    <app-ng-zone-event-coalescing></app-ng-zone-event-coalescing>

    <div style="display: flex; flex-direction: column; max-width: 100%; height:100px;">
      <div *ngFor="let a of arr">
        {{a}}
      </div>
    </div>
  `
})
export class AppComponent {

  arr = Array.from(new Array(1000).fill(0))

  doStuff = (v?): void => {
    console.log('heavy computation', v);
    for (let i = 0; i < 99999999; i++) {
     Math.pow(i,i+2)
    }
  }

  runWork(num: string): void {
    toEmissions(num)
      .subscribe(this.doStuff);
  }

  runWorkCoalesced(num: string): void {
    toEmissions(num)
      .pipe(coalesceWith(setTimeoutDurationSelector))
      .subscribe(this.doStuff);
  }

}
