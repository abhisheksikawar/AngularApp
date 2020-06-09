import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/services/restapi.service';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {
  message:string;
  users:any;
  constructor(private rest:RestapiService) { }

  ngOnInit(): void {
    this.message=this.rest.welcome();
    this.rest.getRemoteDate().subscribe(success=>{
      this.users=success;
    },failure=>{console.log(failure)});
  }

}
