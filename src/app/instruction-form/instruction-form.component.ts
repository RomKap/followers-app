import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'instruction-form',
  templateUrl: './instruction-form.component.html',
  styleUrls: ['./instruction-form.component.css']
})
export class InstructionFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 courseCategory =[
   { id: 1, name: 'Development'},
   { id: 2, name: 'Arts'},
   { id: 3, name: 'Languages'}
 ];

Submit(f: any){
  console.log(f);
}

}
