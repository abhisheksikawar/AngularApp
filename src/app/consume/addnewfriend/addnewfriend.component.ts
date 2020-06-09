import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/services/restapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addnewfriend',
  templateUrl: './addnewfriend.component.html',
  styleUrls: ['./addnewfriend.component.css']
})
export class AddnewfriendComponent implements OnInit {

  name:string=""
  location:string=""
  likes:number=0

  constructor(private api:RestapiService, private route:Router) { }

  ngOnInit(): void {
  }

  captureNewFriend =(newFriendFormInstance)=>{
    console.log(newFriendFormInstance);
    console.log(newFriendFormInstance.value);
    this.api.addFriend(newFriendFormInstance.value)
            .subscribe(res=>{
              console.log(res);
              this.route.navigate(['/consumefakerest'])
              
            }, err=>{
              console.log(err);
            })
  }

}

