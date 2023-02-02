import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/models/user';
import { UsersApiService } from 'src/app/services/users-api.service';
@Component({
  selector: 'app-postuser',
  templateUrl: './postuser.component.html',
  styleUrls: ['./postuser.component.css']
})
export class POSTuserComponent implements OnInit {
user=new user;
  constructor(private serv :UsersApiService
    , private router:Router) {
  }
  ngOnInit(): void {
  }

  onSubmit(){
    this.serv.post(this.user).subscribe(data=>{
      this.router.navigateByUrl("getuser");

  }
    );
}}
