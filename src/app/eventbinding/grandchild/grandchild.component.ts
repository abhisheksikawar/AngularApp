import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css']
})
export class GrandchildComponent implements OnInit {
  @Input() name
  @Output() broadcastNameToChild = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  sendToChild =()=>{
    this.broadcastNameToChild.emit(this.name)
  }

}
