import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';
import { UsersApiService } from 'src/app/services/users-api.service';

@Component({
  selector: 'app-getuser',
  templateUrl: './getuser.component.html',
  styleUrls: ['./getuser.component.css']
})
export class GETuserComponent implements OnInit {
  userData:user[];
  constructor(private serv :UsersApiService) {
    this.serv.get().subscribe((data:any)=>{
      this.userData=data;
    });
  }
  onDelete(id){
    if(confirm("Are You Sure?")){
      this.serv.delete(id).subscribe((data:any)=>{
        location.reload();
      })
    }
  }
  ngOnInit(): void {
  }

}
