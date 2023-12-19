import { Component, OnInit } from '@angular/core';
import { retry } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {

  constructor(private api: ApiService) { }
  fetching: boolean = false;
  person: any;
  status= 'No Data';
  ngOnInit(): void {
    // this.fetchDeatils();
  }

  fetchDeatils() {
    this.fetching = true;
    this.status = 'Fetching Data'
    this.api.getUsers().pipe(
      retry(1)
    )
    .subscribe((res: any) => {
      this.person = res;
      this.status = 'Data Fetched';
      this.fetching = false;
      console.log(res);
    }),
      (error: any) => {
        this.status = 'Problem Fectching Data'
        this.fetching = false;
        console.log(error);
      }
  }

}
