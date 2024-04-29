import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl } from '@angular/forms';
import { UserService } from '../../Services/User/user.service';
import { Validators } from '@angular/forms';
import { response } from 'express';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  submitted=false;
  display=true;
  constructor(private user:UserService,private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
    this.submitted=true;
    if(this.loginForm.valid){
      const reqData={
        emailId:this.loginForm.value.emailId,
        password:this.loginForm.value.password
      };
      console.log(reqData);
      this.user.UserLogin(reqData).subscribe((response:any)=>{
        console.log(response);
      })
    }
  }

}
