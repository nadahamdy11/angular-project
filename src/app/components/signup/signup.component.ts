import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.services';
import {customer}from './../../models/customer'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  customer=new customer();
  constructor( private serv:CustomerService,private route:Router) { }
  ngOnInit(): void {
  }
  onSubmit(){
    this.serv.post(this.customer).subscribe(data=>{
      this.route.navigateByUrl("home")
    })
  }
  
}
