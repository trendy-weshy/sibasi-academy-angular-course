import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from "@angular/forms"

@Component({
  selector: 'mfo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   myForm: FormGroup;
  constructor(private fb: FormBuilder) { 

  }

  ngOnInit() {
    this.myForm =  this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required,Validators.pattern('^[a-zA-Z]\w{3,14}$')]]
    })
  }
   
  get username(){
    return this.myForm.get('username');
  }
  get password(){
    return this.myForm.get('password');
  }

}
