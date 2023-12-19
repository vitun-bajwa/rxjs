import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api';
  loading: boolean = true;
  api1Data: any;
  api2Data: any;

  constructor(private http: HttpClient, private apiService: ApiService) { }
  api1Url = 'https://dummyjson.com/carts';
  api2Url = 'https://dummyjson.com/products';
  api3Url = 'https://dummyjson.com/posts'

  ngOnInit() {
    this.loading = true;

  }

  api() {
    Promise.all([
      this.one(),
      this.two(),
      this.three()
    ])
  }

  one() {
    this.http.get(this.api1Url).subscribe((res: any) => {
      console.log('first result', '>>>>>>>>>');
    })
  }
  two() {
    this.http.get(this.api2Url).subscribe((res: any) => {
      console.log('second result', '>>>>>>>>>');
    })
  }
  three() {
    this.http.get(this.api3Url).subscribe((res: any) => {
      console.log('third result', '>>>>>>>>>');
    })
  }


  // fork join
  // api() {
  //   forkJoin(
  //      [
  //       {first: this.one(),
  //       sec: this.two(),
  //       third: this.three()}
  //     ]

  //   ).subscribe((res:any) => {
  //     console.log(res, '>>>>>>>>>>>>');
  //   })
  // }

  // one(){
  //   this.http.get(this.api1Url)
  // }
  // two(){
  //   this.http.get(this.api2Url)
  // }
  // three(){
  //   this.http.get(this.api3Url)
  // }

  // firstApiResult: any;
  // secondApiResult: any;
  // ngOnInit(): void {
  //   this.api();
  // }

  // firstAPI = this.http.get('https://dummyjson.com/carts')
  // secondAPI = this.http.get(`https://dummyjson.com/products`)
  // api() {
  //   forkJoin([this.firstAPI, this.secondAPI])
  //     .subscribe(
  //       (result: any) => {
  //         this.firstApiResult = result[0];
  //         this.secondApiResult = result[1];
  //         console.log(result, '>>>>>>>>>>>>>>');
  //       })
  // }
  // datas:any
  totalSum: any = 0;
  totalSumNewClaims: any = 0;
  totalSumBoostedClaims: any = 0;
  // datas: any = [{
  //   total: [
  //     {
  //       section: 'newVsBoostClaims',
  //       sectionName: 'newVsBoostedClaim',
  //       type: 'widget',
  //       fields: [
  //         {
  //           field: 'totalNewClaims',
  //           displayName: 'Total newClaims',
  //           fieldType: 'amount',
  //         },
  //         {
  //           field: 'totalClaims',
  //           displayName: 'Total Boosted Claims',
  //           fieldType: 'amount',
  //         },
  //       ],
  //     },
  //   ],
  //   data: {
  //     totals: {
  //       'OC Team': {
  //         newVsBoostedClaims: {
  //           totalNewClaims: 18093000,
  //           totalClaims: 17456985,
  //           total: 6575
  //         }
  //       },
  //       'Olympic Boost': {
  //         newVsBoostedClaims: {
  //           totalNewClaims: 1993000,
  //           totalClaims: 1646985,
  //           total: 68757
  //         },
  //       },
  //     },
  //   },
  // }
  // ]
  // x = this.datas.forEach((item: any) => {
  //   debugger
  //   this.totalSumNewClaims = Object.values(item.data.totals).reduce((key: any, keyb: any) => {
  //     debugger
  //     return key + keyb.newVsBoostedClaims?.totalNewClaims;
  //   }, 0)
  //   this.totalSumBoostedClaims = Object.values(item.data.totals).reduce((key: any, keyb: any) => {
  //     debugger
  //     return key + keyb.newVsBoostedClaims?.totalClaims;
  //   }, 0)
  //   console.log('Total new Claims:', this.totalSumNewClaims);
  //   console.log('Total Claims:', this.totalSumBoostedClaims);
  // })


datas: any = [
  {
    total: [
      {
        section: 'newVsBoostClaims',
        sectionName: 'newVsBoostedClaim',
        type: 'widget',
        fields: [
          {
            field: 'totalNewClaims',
            displayName: 'Total newClaims',
            fieldType: 'amount',
          },
          {
            field: 'totalClaims',
            displayName: 'Total Boosted Claims',
            fieldType: 'amount',
          },
        ],
      },
    ],
    data: {
      totals: {
        'OC Team': {
          newVsBoostedClaims: {
            totalNewClaims: 18093000,
            totalClaims: 17456985,
            total: 6575
          }
        },
        'Olympic Boost': {
          newVsBoostedClaims: {
            totalNewClaims: 1993000,
            totalClaims: 1646985,
            total: 68757
          },
        },
      },
    },
  }
]
 value:any
 a:any
x = this.datas.forEach((item:any) => {
  debugger
  let key = item.data.totals;
  Object.values(key).forEach((obj:any) => {
    Object.values(obj).forEach((sum:any) => {
      let tempValue = sum.total
      let tempValue2 = sum.totalClaims
      if (!this.a) {
        this.a = 0
      }
      this.a += tempValue2
      if (!this.value) {
        this.value = 0
      }
      this.value += tempValue
    })
  })
  console.log(this.value, this.a);
});
}
