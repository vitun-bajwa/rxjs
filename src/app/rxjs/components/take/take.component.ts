import { Component, OnInit } from '@angular/core';
import { interval, take, takeLast } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const source = interval(1000).pipe(
    //   take(5)
    // );
    // source.subscribe((res:any) => {
    //   console.log(res,'take');
    // })

    // takelast
    const source = interval(1000).pipe(
      takeLast(3)
    );
    source.subscribe((res:any) => {
      console.log(res,'take');
    })
  }

}
