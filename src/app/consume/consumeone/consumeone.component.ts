import { Component, OnInit } from '@angular/core';
import { MathService } from 'src/app/services/math.service';

@Component({
  selector: 'app-consumeone',
  templateUrl: './consumeone.component.html',
  styleUrls: ['./consumeone.component.css']
})
export class ConsumeoneComponent implements OnInit {
mymessage:string=null;
score:number[];
myscore:number;
  constructor(private math:MathService) { }

  ngOnInit(): void {
    this.mymessage=this.math.message;
    console.log(this.math.getMessage);
    this.score=this.math.getScore();
    //this.score.push(4);
    //this.math.score.push(3);

  }
  addtoservice=()=>{
    this.math.score.push(this.myscore);
  }

}
