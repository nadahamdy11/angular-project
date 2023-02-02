import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.services';
import{customer}from'./../../models/customer';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name;
  password;
  ErrorMsg="";
  allData:customer[];
  constructor(private serv:CustomerService,private route:Router) { }

  submit(){
    this.serv.get().subscribe((data:any)=>{
      let user=data.find(allData=>{
        return allData.name==this.name&&allData.password==this.password;
      })
      if(user){
        console.log("Welcom To Your Account");
        this.route.navigateByUrl("home");
      }else{
        this.ErrorMsg="try again";
      }
    } )
  }
  ngOnInit(): void {
  }

}
