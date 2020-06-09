import { Component, OnInit } from '@angular/core';
import { MathService } from 'src/app/services/math.service';

@Component({
  selector: 'app-consumetwo',
  templateUrl: './consumetwo.component.html',
  styleUrls: ['./consumetwo.component.css']
})
export class ConsumetwoComponent implements OnInit {
 message:string;
 score:number[];
  constructor(private m:MathService) { }

  ngOnInit(): void {
 this.message=this.m.getMessage();
 this.score=this.m.getScore();
  }

}
