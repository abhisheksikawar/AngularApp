import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/services/restapi.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
import { Friends } from 'src/app/model/friends';

@Component({
  selector: 'app-consumefakerest',
  templateUrl: './consumefakerest.component.html',
  styleUrls: ['./consumefakerest.component.css']
})
export class ConsumefakerestComponent implements OnInit {
  friends:Friends
  name:string;
  id:number=null;
  likes:number=0;
  location:string;
  displayNewFriendForm :boolean=false
  displayEditFriendForm: boolean=false
  constructor(private restapi:RestapiService,private route:Router) { }

  ngOnInit(): void {
    this.getAllFriendsFromService();
  }

  getAllFriendsFromService(){
    return this.restapi.getAllFriends().subscribe(success=>{
      console.log(success)
      this.friends=success;
    },error=>{
      console.log(error)
    })
  }


  captureNewFriend(newFriendFormInstance){
    console.log(newFriendFormInstance);
    console.log(newFriendFormInstance.value);
    this.restapi.addFriend(newFriendFormInstance.value).subscribe(res=>{
      console.log(res);
      this.getAllFriendsFromService();
      this.displayNewFriendForm=false;
      this.name="";
      this.location="";
    },error=>{
      console.log(error);
    })

  }

  editFriend(editedFriend){
    console.log(editedFriend);
    this.restapi.updateFriendById(this.id,editedFriend.value).subscribe(res=>{
      console.log(res);
      this.getAllFriendsFromService();
      this.displayEditFriendForm=false;
    } ,err=>{console.log(err)})

  }
  displayAddNewFriendForm(){
    this.displayNewFriendForm=!this.displayNewFriendForm  
  }
  toggleDisplayEditFriendForm(id){
    this.displayEditFriendForm=!this.displayEditFriendForm;
    console.log("Edit friend with id :"+ id)
    this.restapi.getFriendById(id).subscribe(resp=>{
      console.log(resp)
      this.id=resp.id;
      this.name=resp.name;
      this.location=resp.location;
      this.likes=resp.likes;
    },err=>{
        console.log(err);
      })
  }

  deleteSelectedFriend =(id)=>{
    this.restapi.deleteFriendById(id)
            .subscribe(res=>{
              console.log(res)
              this.getAllFriendsFromService()
            }, err=>{
              console.log(err);
            })
  }

  addNewFriendInNewPage =()=>{
    this.route.navigate(['/addnewfriend'])
  }
  editFriendInNewPage =(id)=>{
    this.route.navigate(['/editfriend', id])
  }

  increaseLike(friend){
    friend.likes=friend.likes+1;
    console.log(friend.id)
    console.log(friend.like);
    this.restapi.increaseLikeById(friend)
    .subscribe(res=>{
      console.log(res)
    this.getAllFriendsFromService()},
    err=>{console.log(err)})
  }

  decreaseLike(friend){
    friend.likes=friend.likes-1;
    console.log(friend.id)
    console.log(friend.like);
    this.restapi.decreaseLikeById(friend)
    .subscribe(res=>{
      console.log(res)
    this.getAllFriendsFromService()},
    err=>{console.log(err)})
  }


}
