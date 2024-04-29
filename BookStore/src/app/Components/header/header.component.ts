import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginSignupComponent } from '../login-signup/login-signup.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private dialog:MatDialog,private router:Router){}
  loginclick:boolean=false
  loggedin:boolean=false

  profiledata(){
    if(localStorage.getItem('token')){
      this.loggedin=!this.loggedin;
    }
    else{
      this.loginclick=!this.loginclick
    }
  }
  login(){
  const dialogRef=this.dialog.open(LoginSignupComponent,{width:'740px',height:'475px'});
  dialogRef.afterClosed().subscribe(result=>{
  console.log('The dialog was closed');

  });
  this.loginclick=!this.loginclick;
}
logout(){
   this.loggedin=!this.loggedin;
   localStorage.removeItem('token');

}
profile(){
  this.router.navigate(['dashboard/personal'])
  console.log('Personal');
}
}

