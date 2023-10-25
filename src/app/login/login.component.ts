import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from '../login-data';
import { LoginResponse } from '../login-response';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginResponse:LoginResponse = new LoginResponse();

  loginData: LoginData = new LoginData(); 

  enteredEmail = ""
  enteredPassword = ""

  email!:any;
  pwd!:any;
  name!:any

  constructor(private userservice: ServiceService,private rou: Router){

  }


  ngOnInit() {}


  emailEnter(email: any){
    console.log(email)
    this.enteredEmail=email
  }

  passwordEnter(password:any){
    console.log(password)
    this.enteredPassword = password
  }

  nameEnter(name:any){
    console.log(name)
    this.enteredPassword = name
  }

  login(){

    if(this.enteredEmail=="" && this.enteredPassword==""){
      console.log("values are null")
    }
    else{
    
console.log(this.loginData);
    this.userservice.loginApp(this.loginData).subscribe(response=>{
      console.log("values are not null")
      console.log(response)
      this. loginResponse = response
      this.loginData = this.loginResponse.responseContent
      this.rou.navigate(['/admin'])

    })
  }

  }

}
