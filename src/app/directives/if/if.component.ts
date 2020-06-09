import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  display=true;
  change;

  toggle=()=>{
    if(this.display==true)
    {
      this.display=false;
    }
    else{
      this.display=true;
    }

  }
  ifelse()
  {
    if(this.change==true)
    {
      this.change=false;
    }
    else{
      this.change=true;
    }
  }


}
