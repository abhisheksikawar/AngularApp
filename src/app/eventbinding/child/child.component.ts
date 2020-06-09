import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() name
  @Output() broadcastToParent=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  eventReceivedFromGrandChild=(e)=>{
    this.name = e
  }

  sendToParent(){
    this.broadcastToParent.emit(this.name);

  }

}
