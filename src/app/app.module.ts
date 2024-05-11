import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { HeaddownComponent } from './headdown/headdown.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { CareersComponent } from './careers/careers.component';
import { DataScienceProgramComponent } from './data-science-program/data-science-program.component';
import { InternshipComponent } from './internship/internship.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    HeaddownComponent,
    NavbarComponent,
    HomeComponent,
    AboutusComponent,
    ServicesComponent,
    ProductsComponent,
    CareersComponent,
    DataScienceProgramComponent,
    InternshipComponent,
    ContactUsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
     BsDropdownModule.forRoot(),
    ModalModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
