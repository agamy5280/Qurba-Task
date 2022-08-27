import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService} from './auth.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService){
  }

  // Authenticating Routing Guard
  canActivate(){
    return this.authService.isAuthenticated;
  }
  
}
