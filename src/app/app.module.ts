import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { MenuoComponent } from './main/menuo/menuo.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import{UpdateuserComponent} from'./data/users/updateuser/updateuser.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { GETuserComponent } from './data/users/getuser/getuser.component';
import { POSTuserComponent } from './data/users/postuser/postuser.component';
import{HttpClientModule} from '@angular/common/http';
import { ShowusersComponent } from './data/users/showusers/showusers.component';
import { ContectusComponent } from './contectus/contectus.component';
import { MessageComponent } from './message/message.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuoComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    GETuserComponent,
    POSTuserComponent,
    UpdateuserComponent,
    ShowusersComponent,
    ContectusComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
