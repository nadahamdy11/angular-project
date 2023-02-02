import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main/about/about.component';
import { MenuoComponent } from './main/menuo/menuo.component';
import { HomeComponent } from './main/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent} from './notfound/notfound.component';
import { GETuserComponent } from './data/users/getuser/getuser.component';
import { POSTuserComponent } from './data/users/postuser/postuser.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { UpdateuserComponent} from './data/users/updateuser/updateuser.component';
import { ShowusersComponent} from './data/users/showusers/showusers.component';
import { ContectusComponent} from './contectus/contectus.component';
import { MessageComponent} from './message/message.component';


const routes: Routes = [
  //ui
  { path:'navbar', component:NavbarComponent},
  { path:'about', component:AboutComponent},
  { path:'home', component:HomeComponent},
  { path:'signup', component:SignupComponent},
  { path:'login', component:LoginComponent},
  { path:'menuo', component:MenuoComponent},
  { path:'footer', component:FooterComponent},
  //users
  { path:'postuser', component:POSTuserComponent},
  { path:'getuser', component:GETuserComponent},
  {path:'updateuser/:id',component:UpdateuserComponent},
  {path:'showuser/:id',component: ShowusersComponent},
  //contect us
  {path:'contectus',component:ContectusComponent},
  {path:'message',component:MessageComponent},

  //defult
  { path:'', component:HomeComponent},
  { path:'**', component:NotfoundComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
