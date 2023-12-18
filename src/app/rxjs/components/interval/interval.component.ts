import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  constructor() { }
  sub1!: Subscription
  obmsg: any;
  ngOnInit(): void {
    this.interval();
      // const broad = interval(1000);
      // this.sub1 = broad.subscribe((res: any) => {
      //   console.log(res);
      //   this.obmsg = 'video ' + res
      //   if (res >= 5) {
      //     this.sub1.unsubscribe();
      //   }
      // })
  }

  interval() {
    const broad  = interval(1000);
    this.sub1 = broad.subscribe((res:any) => {
      this.obmsg = 'video ' + res;
      console.log(res);
      if(res >= 5){
        this.sub1.unsubscribe()
      }
    })
  }
}
