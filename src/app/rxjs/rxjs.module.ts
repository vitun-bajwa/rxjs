import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { MapComponent } from './components/map/map.component';
import { IntervalComponent } from './components/interval/interval.component';
import { TakeComponent } from './components/take/take.component';
import { ConcatComponent } from './components/concat/concat.component';
import { MergeMapComponent } from './components/merge-map/merge-map.component';
import { ConcatMapComponent } from './components/concat-map/concat-map.component';
import { RetryComponent } from './components/retry/retry.component';
import { HttpClientModule } from '@angular/common/http';
import { DebounceTimeComponent } from './components/debounce-time/debounce-time.component';

@NgModule({
  declarations: [
    MapComponent,
    IntervalComponent,
    TakeComponent,
    ConcatComponent,
    MergeMapComponent,
    ConcatMapComponent,
    RetryComponent,
    DebounceTimeComponent,
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule,
    HttpClientModule
  ]
})
export class RxjsModule { }
