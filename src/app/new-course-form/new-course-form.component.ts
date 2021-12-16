import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})

export class NewCourseFormComponent {
form;

 //With formbuilder approach
  constructor(fb: FormBuilder){
   this.form =  fb.group({
      topics: fb.array([]) 
   });   
  }

  //with formgorup approach
  // form = new FormGroup({
  //   topics: new FormArray([]) 
  // });

  addTopic(inpTopic: HTMLInputElement){
    this.getTopics.push(new FormControl(inpTopic.value));
    inpTopic.value='';
  }

  removeTopic(tpc: any){
    let index = this.getTopics.controls.indexOf(tpc);
    this.getTopics.removeAt(index);
  }

  get getTopics(){
    return this.form.get('topics') as FormArray;
  }

}
