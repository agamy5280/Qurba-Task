import {
  Component
} from '@angular/core';
import {
  AuthService
} from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Qurba-task';
  constructor(private authService: AuthService) {
  }

  removeBody(){
    if (this.authService.isLoginClicked==true){
      return false;
    }else{
      return true;
    }  
  }

  
  
}
