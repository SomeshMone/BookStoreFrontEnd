import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './Components/login-signup/login-signup.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PersonaldetailsComponent } from './Components/personaldetails/personaldetails.component';
import { BookcartComponent } from './Components/bookcart/bookcart.component';
import { DispalyCardsComponent } from './Components/dispaly-cards/dispaly-cards.component';
import { CartComponent } from './Components/cart/cart.component';

const routes: Routes = [{path:'login',component:LoginSignupComponent},{path:'dashboard',component:DashboardComponent,children:[{path:'personal',component:PersonaldetailsComponent},{path:'books',component:BookcartComponent},{path:'cards',component:DispalyCardsComponent},
{path:'carts',component:CartComponent}
  
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
