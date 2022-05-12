import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { faker } from '@faker-js/faker';
import { IntroComponent } from './intro/intro.component';
import {HttpClientModule} from '@angular/common/http';
import { PopularComponent } from './popular/popular.component';
import { TopBrandsComponent } from './top-brands/top-brands.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatList,MatListItem,} from '@angular/material/list';
import {MatButton,} from '@angular/material/button'
import {MatGridListModule} from '@angular/material/grid-list';
import { SneaksCardComponent } from './sneaks-card/sneaks-card.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { HomeComponent } from './home/home.component'; 
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatButtonModule} from '@angular/material/button';
import { AppbarComponent } from './appbar/appbar.component'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'; 



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    PopularComponent,
    TopBrandsComponent,
    SneaksCardComponent,
    HomeComponent,
    AppbarComponent,
    LoginComponent,
    SignupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    ReactiveFormsModule
    
    //faker
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    NavbarComponent
  ]
})
export class AppModule { }
