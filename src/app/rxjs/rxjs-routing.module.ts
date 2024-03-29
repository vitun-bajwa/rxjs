import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { interval, merge } from 'rxjs';
import { IntervalComponent } from './components/interval/interval.component';
import { TakeComponent } from './components/take/take.component';
import { ConcatComponent } from './components/concat/concat.component';
import { MergeMapComponent } from './components/merge-map/merge-map.component';
import { ConcatMapComponent } from './components/concat-map/concat-map.component';
import { RetryComponent } from './components/retry/retry.component';
import { DebounceTimeComponent } from './components/debounce-time/debounce-time.component';

const routes: Routes = [
  {
    path: '',component:MapComponent
  },
  {
    path: 'int',component:IntervalComponent
  },
  {
    path: 'take',component:TakeComponent
  },
  {
    path: 'concat',component:ConcatComponent
  },
  {
    path: 'mp',component:MergeMapComponent
  },
  {
    path: 'concatmap',component:ConcatMapComponent
  },
  {
    path: 'retry',component:RetryComponent
  },
  {
    path: 'de',component:DebounceTimeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
