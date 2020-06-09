import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuilt',
  templateUrl: './inbuilt.component.html',
  styleUrls: ['./inbuilt.component.css']
})
export class InbuiltComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  message=" heLLo My NAME is ABhIsHek";
  myDate :Date=new Date();
  currency=8008

}
