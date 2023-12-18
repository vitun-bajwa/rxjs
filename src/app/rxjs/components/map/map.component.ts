import { Component, OnInit } from '@angular/core';
import { Subscription, interval, map, timeout } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }
  sub1!: Subscription
  ngOnInit(): void {
    // ex - 01
    const broad = interval(1000);
    this.sub1 = broad.pipe(
      map((res: any) => 'video => ' + res)).subscribe(
        (res: any) => {
        console.log(res);
      })
        setTimeout(() => {
          this.sub1.unsubscribe();
        }, 10000);
  }
}
