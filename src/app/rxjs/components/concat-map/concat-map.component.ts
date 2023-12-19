import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/core/services/design-utility.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {

  constructor(private _du:DesignUtilityService) { }
  getData(data:any) {
    return of(data + ' Video Uploaded').pipe(delay(2000))
  }
  ngOnInit(): void {
    const source = from(['tceh', 'comedy', 'news'])
    // ex - 01
    source.pipe(
      map(res => this.getData(res)))
      .subscribe((res:any) => {
        this._du.print(res, 'elContainer')
      })

    //   // ex - 02 map + concatAll
    // source.pipe(
    //   map(res => this.getData(res)),
    //   concatAll()
    //   )
    //   .subscribe((res:any) => {
    //     this._du.print(res, 'elContainer2')
    //   })

        //   // ex - 03 merge Map
    source.pipe(
      mergeMap(res => this.getData(res)),
      )
      .subscribe((res:any) => {
        this._du.print(res, 'elContainer2')
      })

      // ex - 04 concat Map
    source.pipe(
      concatMap(res => this.getData(res)),
      )
      .subscribe((res:any) => {
        this._du.print(res, 'elContainer3')
      })
  }

}
