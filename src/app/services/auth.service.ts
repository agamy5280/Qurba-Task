import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { loginForm } from '../login/login.component';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean = false;
  isLoginClicked : boolean = false;
  dataInfo : any = [] as unknown as string;
  
  constructor(private http: HttpClient, private router: Router ) { }

  login(form : loginForm){
    this.http.post('https://dummyjson.com/auth/login',form).subscribe({
      next: (data) => {
        console.log("login good!");
        alert("Login Successful");
        console.log(data);
        this.dataInfo.push(data);
        this.isAuthenticated = true;
        this.router.navigateByUrl('/products');
      },
      error:(error)=>{
        alert("Invalid Credentials");
        this.isAuthenticated = false;
        this.router.navigateByUrl('');
      }
    })
    
  }
}
