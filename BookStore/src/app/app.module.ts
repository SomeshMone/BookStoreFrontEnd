import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import necessary FormsModule and ReactiveFormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSignupComponent } from './Components/login-signup/login-signup.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { LogincomponentComponent } from './Components/logincomponent/logincomponent.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HeaderComponent } from './Components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonaldetailsComponent } from './Components/personaldetails/personaldetails.component';
import { AddressComponent } from './Components/address/address.component';
import { MatRadioModule } from '@angular/material/radio';
import { BookcartComponent } from './Components/bookcart/bookcart.component';
import { DispalyCardsComponent } from './Components/dispaly-cards/dispaly-cards.component';
import { CardsComponent } from './Components/cards/cards.component';
import { MatMenuModule } from '@angular/material/menu';
import { SearchBookPipe } from './Pipes/search-book.pipe';
import { CartComponent } from './Components/cart/cart.component';
import { OrdersummaryComponent } from './Components/ordersummary/ordersummary.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    LoginComponent,
    SignupComponent,
    LogincomponentComponent,
    DashboardComponent,
    HeaderComponent,
    PersonaldetailsComponent,
    AddressComponent,
    BookcartComponent,
    DispalyCardsComponent,
    CardsComponent,
    SearchBookPipe,
    CartComponent,
    OrdersummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule, // Include FormsModule
    ReactiveFormsModule, // Include ReactiveFormsModule
    MatDialogModule,
    MatDividerModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
