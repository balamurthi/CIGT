import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { CareersComponent } from './careers/careers.component';
import { DataScienceProgramComponent } from './data-science-program/data-science-program.component';
import { InternshipComponent } from './internship/internship.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
   { path:'home',component:HomeComponent},
   {path:'Aboutus',component:AboutusComponent},
   {path:'Services',component:ServicesComponent},
   {path:'Products',component:ProductsComponent},
   {path:'Careers',component:CareersComponent},
   {path:'DataScienceProgram',component:DataScienceProgramComponent},
   {path:'Intership',component:InternshipComponent},
   {path:'Contactus',component:ContactUsComponent},
   { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
