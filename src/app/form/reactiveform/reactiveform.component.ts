import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  reactivePersonal:any
  fname: string =""
  lname:string=""
  choice:string=""



  constructor() { }

  ngOnInit(): void {
    this.reactivePersonal = new FormGroup({
      fname: new FormControl("", Validators.compose([
          Validators.required,
           Validators.minLength(4),
           Validators.pattern('^[a-zA-Z]+$')
      ])),
      lname: new FormControl("", this.customValidation),
      choice: new FormControl()
    })

  }

  customValidation =(control)=>{
    console.log(control);
    if(control.value.length < 3){
      return {lname: true}
    }
    
  }

  saveFormValue =(rf)=>{
    console.log(rf);
    console.log(rf.value);

  }


}
