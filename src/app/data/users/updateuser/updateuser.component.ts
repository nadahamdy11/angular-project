import { ActivatedRoute, Router } from '@angular/router';
import { UsersApiService } from 'src/app/services/users-api.service';
import { user } from '../../../models/user';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css'],


})
export class UpdateuserComponent implements OnInit {
  user:user=new user;
  id;
    constructor(private serv:UsersApiService,private activeRoute:ActivatedRoute,private route:Router) {
      this.id=this.activeRoute.snapshot.paramMap.get("id");
      this.serv.getById(this.id).subscribe(data=>{
        this.user=data;
      })
      }
      editData(){
      this.serv.edit(this.user,this.id).subscribe(data=>{
        this.route.navigateByUrl("getuser");
      })
      }
      ngOnInit(): void {
    }

}
