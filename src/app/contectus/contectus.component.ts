import { Component, OnInit } from '@angular/core';
import{contectus} from'../models/contectus';
import { Route, Router } from '@angular/router';
import { CustomerService } from '../services/contectus.services';

@Component({
  selector: 'app-contectus',
  templateUrl: './contectus.component.html',
  styleUrls: ['./contectus.component.css']
})
export class ContectusComponent implements OnInit {
contectus=new contectus();

constructor( private serv:CustomerService,private route:Router) { }
ngOnInit(): void {
}
uiSubmit(){
  this.serv.post(this.contectus).subscribe(data=>{
    this.route.navigateByUrl("message")
  })
}


}
