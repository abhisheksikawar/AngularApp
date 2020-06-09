import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  name:string = "ngRx Store"

  constructor() { }

  ngOnInit(): void {
  }


  eventReceivedFromChild=(e)=>{
    console.log(e)
    this.name = e
  }
}