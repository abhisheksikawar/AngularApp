import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   score:number
  friends=[
    {
      id:'AB01',
      name:'OBB',
      score:2
    },
    {
      id:'AB02',
      name:'abhi',
      score:21
    },
    {
      id:'AB03',
      name:'hiii',
      score:23
    },
    {
      id:'AB04',
      name:'yoo',
      score:24
    },
  ]

  salary=[5000,8000,2000,9000]
  changeScore=(counter)=>{
    console.log(JSON.stringify(this.friends[counter]))
    console.log(this.friends[counter]);
    ++this.friends[counter].score;
    console.log(this.friends[counter])
  }

}
