import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
import { LoadingBarService } from '@ngx-loading-bar/core';
@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css']
})
export class DebounceTimeComponent implements AfterViewInit {
  @ViewChild('input') input!: ElementRef;
  @ViewChild('input2') input2!: ElementRef;
  reqdata = null;
  reqdata2: any;
  constructor(private loading:LoadingBarService) { }

  ngAfterViewInit(): void {
    // debounceTime
    // const search = fromEvent(this.input.nativeElement, 'keyup').pipe(
    //   map((event:any) => event.target.value),
    //   debounceTime(500),
    // )
    // search.subscribe((res: any) => {
    //   this.reqdata = res;
    //   this.loading.start();
    //   console.log(res);

    //   setTimeout(() => {
    //     this.reqdata = null;
    //   this.loading.stop();
    //   },1000)
    // });

    // Distinct Until Changed
    const search2 = fromEvent(this.input2.nativeElement, 'keyup').pipe(
      map((event:any) => event.target.value),
      debounceTime(500),
      distinctUntilChanged()
    )
    search2.subscribe((res: any) => {
      this.reqdata2 = res;
      this.loading.start();
      console.log(res);

      setTimeout(() => {
        this.reqdata2 = null;
      this.loading.stop();
      },1000)
    });
  }
}
