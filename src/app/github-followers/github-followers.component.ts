import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
//import 'rxjs/add/observable/combineLatest';
import { map, switchMap } from 'rxjs/operators';


@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers!: any[];

  constructor(private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() { 

    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .pipe( 
      switchMap(combined => {
        let id = combined[0].get('id');
        let page = combined[0].get('page');

        return this.service.getAll()      
      }))
      .subscribe(followers => this.followers = followers);
       

    // this.route.paramMap
    //   .subscribe(params => {

    //   });

    // this.route.queryParamMap
    //   .subscribe(params => {

    //   });

    
  }
}
 

