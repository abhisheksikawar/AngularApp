import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestapiService } from 'src/app/services/restapi.service';

@Component({
  selector: 'app-editfriend',
  templateUrl: './editfriend.component.html',
  styleUrls: ['./editfriend.component.css']
})
export class EditfriendComponent implements OnInit {

  activeId:number = null
  name:string=""
  location:string=""
  likes:number=0

  constructor(private activeroute:ActivatedRoute, private api:RestapiService, private route:Router) { }

  ngOnInit(): void {
    console.log(this.activeroute)
    this.activeId = this.activeroute.snapshot.params.friendId
    console.log(this.activeId)
    this.api.getFriendById(this.activeId)
            .subscribe(res =>{
              console.log(res)
              this.activeId = res.id
              this.name = res.name
              this.location = res.location
              this.likes = res.likes
              //this.displayEditFriendForm = false
            }, err=>{
              console.log(err)
            })
  }

  editSelectedFriend =(eff)=>{
    console.log(eff.value)
    this.api.updateFriendById(this.activeId, eff.value)
            .subscribe(res=>{
              console.log(res)
              
              this.activeId= null
              this.name = null
              this.location = null
              this.likes = null
              this.route.navigate(['/consumefakerest'])
            }, err=>{
              console.log(err)
            })
  }

}