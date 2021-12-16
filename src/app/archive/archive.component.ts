import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  archives = [
    { year: '2017', month: '1' },
    { year: '2017', month: '2' },
    { year: '2017', month: '3' }
  ];
  constructor() {
    // this.arch.push({year:'2017', month:'2'});
    // this.arch.push({year:'2017', month:'3'});
  }

  ngOnInit(): void {
  }

}
