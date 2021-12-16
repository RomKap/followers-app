import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive-details',
  templateUrl: './archive-details.component.html',
  styleUrls: ['./archive-details.component.css']
})
export class ArchiveDetailsComponent implements OnInit {
  //archDetails: any;
  year?: number;
  month?: number;

  constructor(private route: ActivatedRoute,
    private router: Router) {
    //console.log('ArchiveDetailsComponent');
  }

  ngOnInit(): void {
    //By subscribing to observable
    this.route.paramMap
      .subscribe(params => {
        this.year = +params.get('year')!;
        this.month = +params.get('month')!;
      });

    ////By not observable snapshot method
    // let params = this.route.snapshot.paramMap;
    // this.year = +params.get('year')!;
    // this.month = +params.get('month')!;
  }

  ViewAll() {
    this.router.navigate(['']);
  }

}
