import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  todoArray=[];
  completed=[];
  todo:String;
  addtodo(){
    this.todoArray.push(this.todo);
    this.todo="";
    console.log(this.todoArray)
  }
  todoCompleted(counter){
    this.completed.push(this.todoArray[counter]);
    console.log(counter)
    this.todoArray.splice(counter,1);
    console.log(this.todoArray);


  }
  tododelete(counter){
    this.completed.splice(counter,1);
  }


}
