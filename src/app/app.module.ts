import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { faker } from '@faker-js/faker';
import { IntroComponent } from './intro/intro.component';
import {HttpClientModule} from '@angular/common/http';
import { PopularComponent } from './popular/popular.component';
import { TopBrandsComponent } from './top-brands/top-brands.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    PopularComponent,
    TopBrandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    //faker
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    NavbarComponent
  ]
})
export class AppModule { }
