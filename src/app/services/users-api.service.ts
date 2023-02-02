import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../models/user';
import { ApiFunctionService } from './apifunction.service';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService extends ApiFunctionService<user> {
  edit: any;

  constructor( http:HttpClient) {
    super(http,"http://localhost:3000/users") }
}
