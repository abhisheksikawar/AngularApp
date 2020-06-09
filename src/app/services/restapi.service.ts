import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Friends } from '../model/friends';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
static readonly friendsApi="http://localhost:3000/all"
  constructor(private http:HttpClient) { }
getRemoteDate=()=>{
  return this.http.get("https://jsonplaceholder.typicode.com/users")
}

friend:Friends;

welcome(){
  return "restapi is running";
}
getAllFriends():Observable<Friends>{
  return this.http.get<Friends>(RestapiService.friendsApi)
}

addFriend(friend):Observable<Friends>{
  return this.http.post<Friends>(RestapiService.friendsApi,friend);
}

updateFriendById(id,editedFreind):Observable<Friends>{
  return this.http.put<Friends>(RestapiService.friendsApi +"/"+id,editedFreind);
}

getFriendById(id):Observable<Friends>{
  return this.http.get<Friends>(RestapiService.friendsApi+"/"+id);
}

deleteFriendById(id):Observable<Friends>{
return this.http.delete<Friends>(RestapiService.friendsApi+"/"+id);
}
increaseLikeById(friend){
  return this.http.put(RestapiService.friendsApi+"/"+friend.id,friend);

}
decreaseLikeById(friend){
  return this.http.put(RestapiService.friendsApi+"/"+friend.id,friend);

}

}
