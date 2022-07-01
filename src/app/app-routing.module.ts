import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/common/pages/aboutus/aboutus.component';
import { ContactusComponent } from './components/common/pages/contactus/contactus.component';
import { HomeComponent } from './components/common/pages/home/home.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about-us',
    component:AboutusComponent
  },
  {
    path:'contact-us',
    component:ContactusComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
