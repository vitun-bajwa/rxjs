import { Component, OnInit } from '@angular/core';
import { from, map, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {

  constructor() { }
  getData(data:any) {
    return of(data + ' Video Uploaded')
  }
  ngOnInit(): void {
    const source = from(['tceh', 'comedy', 'news'])
    // source.pipe(
    //   map(res => this.getData(res))
    // )
    // .subscribe(res => res.subscribe((res2:any) => {
    //   console.log(res2);
    // }))
    // .subscribe((res:any) => {
    //   console.log(res);
      
    // })
    source.pipe(
      mergeMap(res => this.getData(res))
      ).subscribe((res:any) => {
        console.log(res);
      })
  // }

}
}