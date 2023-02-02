import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersApiService } from './../../../services/users-api.service';
import { user } from './../../../models/user';

@Component({
  selector: 'app-showusers',
  templateUrl: './showusers.component.html',
  styleUrls: ['./showusers.component.css']
})
export class ShowusersComponent implements OnInit {

  user:user=new user();
  id;
  scoreCounter:number[];
    constructor(private serv:UsersApiService,private activeRoute:ActivatedRoute) {
      this.id=this.activeRoute.snapshot.paramMap.get("id");
      this.serv.getById(this.id).subscribe(data=>{
        this.user=data;
      })
    }
  ngOnInit(): void {
  }

}
