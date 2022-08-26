import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export interface loginForm {
  username: string;
  password:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: loginForm  = {
    username: '',
    password: '',
  }
  constructor (private authService: AuthService) {}

  ngOnInit(): void {
  }
  // onSubmitting the form authenticate this form detalis given by the user
  onSubmit(){
    this.authService.login(this.form);
  }

}
