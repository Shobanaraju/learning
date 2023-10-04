import { Component } from '@angular/core';
import { RegMessage } from '../reg-message';
import { RegResponse } from '../reg-response';
import { ServiceService } from '../services/service.service';
import { StuMessage } from '../stu-message';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  regMessage:RegMessage=new RegMessage();

  regResponse:RegResponse=new RegResponse();

  registerValues!:any

  enteredName = ""
  enteredEmail = ""
  enteredPassword = ""

  constructor(private userservice: ServiceService){

  }

  ngOnInit() {
  }


  nameEnter(name:any){
    this.enteredName=name;
    console.log(this.enteredName)

  }

  emailEnter(email:any){
    this.enteredEmail=email
    
  }

  passwordEnter(password:any){
    this.enteredPassword=password
    
  }

  register(){

    console.log(this.regResponse)
    this.userservice.regUser(this.regResponse).subscribe(data=>{
      console.log(data)



    });
  }

}
