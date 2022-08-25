import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  loggingStatus: string = 'Login';
  removeBody : string = 'hidden';
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  isLogin(){
    
    if(this.authService.isAuthenticated == true){
      this.removeBody = 'visible';
      this.loggingStatus = "Account";
    } else {
      this.removeBody = "hidden";
      this.loggingStatus = "Log in "
      
    }
    return this.authService.isAuthenticated;
  }
  isLoginClicked(){
    this.authService.isLoginClicked = true;
  }

}
