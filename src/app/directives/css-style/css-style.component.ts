import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-style',
  templateUrl: './css-style.component.html',
  styleUrls: ['./css-style.component.css']
})
export class CssStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bgcolor:string;
  fcolor:string;
  getcolor()
  {
     return "4px solid"
  }
  getbgcolor()
  {
     return "red"
  }
  red:number=0;
  green:number=0;
  blue:number=0;
  getDynamicBG(){
    this.bgcolor="rgb("+this.red+","+this.green+","+this.blue+")";
    return "rgb(" + this.red +","+this.green +","+this.blue+")"
  }
  fred:number=255;
  fgreen:number=255;
  fblue:number=255;
  getFontColor(){
    this.fcolor="rgb("+this.fred+","+this.fgreen+","+this.fblue+")";
    return "rgb(" + this.fred +","+this.fgreen +","+this.fblue+")"
  }

}
