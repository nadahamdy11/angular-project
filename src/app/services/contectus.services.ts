import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { ApiFunctionService } from './apifunction.service';
import{contectus}from'./../models/contectus';
@Injectable({
  providedIn:'root'
})
export  class CustomerService extends ApiFunctionService<contectus>{
constructor(http:HttpClient){
  super(http,"http://localhost:3000/contactus")
}
}
