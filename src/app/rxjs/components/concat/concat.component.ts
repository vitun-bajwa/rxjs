import { Component, OnInit } from '@angular/core';
import { concat, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source = interval(1000).pipe(
      map(video => 'video #' + (video + 1)),
      take(5)
    )
    const source1 = interval(1000).pipe(
      map(video => 'source1 video #' + (video + 1)),
      take(3)
    )
    const source2 = interval(1000).pipe(
      map(video => 'source2 video #' + (video + 1)),
      take(4)
    )
    // source.subscribe((res:any) => {
    //   console.log(res);
    // })
    const finalSource = concat(source, source1, source2)
    finalSource.subscribe((res:any) => {
      console.log(res);
    })
  }

}
