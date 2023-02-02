import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { ApiFunctionService } from './apifunction.service';
import { customer } from '../models/customer';


@Injectable({
  providedIn:'root'
})
export  class CustomerService extends ApiFunctionService<customer>{
constructor(http:HttpClient){
  super(http,"http://localhost:3000/signup")
}
}
