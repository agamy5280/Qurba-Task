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
  constructor(private authService: AuthService) {}

  // Function to remove welcome screen if user is authenticated
  removeBody() {
    if (this.authService.isLoginClicked == true) {
      return false;
    } else {
      return true;
    }
  }
}
